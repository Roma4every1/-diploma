import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./feautures/moviesSlice";
import movieDetailsReduser from "./feautures/movieDetailsSlice";
import newMoviesReducer from "./feautures/newMoviesSlice";
import favoritesReducer from "./feautures/favoritesSlice";
import moviesSearchReducer from "./feautures/moviesSearchSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userReducer from "./feautures/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "user"],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  moviesSearch: moviesSearchReducer,
  newMovies: newMoviesReducer,
  movieDetails: movieDetailsReduser,
  user: userReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
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
