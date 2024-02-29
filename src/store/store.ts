import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./feautures/moviesSlice";
import movieDetailsReduser from "./feautures/movieDetailsSlice";
import newMoviesReducer from "./feautures/newMoviesSlice";
import moviesSearchReducer from "./feautures/moviesSearchSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const rootReducer = combineReducers({
  movies: moviesReducer,
  moviesSearch: moviesSearchReducer,
  newMovies: newMoviesReducer,
  movieDetails: movieDetailsReduser,
});


export const store = configureStore({
  reducer: { rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
