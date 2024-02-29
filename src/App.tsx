import { Route, Routes } from "react-router-dom";
import {  MainTemplate } from "templates";
import {
  DetailsMoviePage,
  HomePage,
  NewPage,
  NotFoundPage,
  SearchPage,
} from "./pages";
import { ROUTE } from "./routes/routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.NEW} element={<NewPage />} />
        <Route path={ROUTE.DETAILS} element={<DetailsMoviePage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      </Route>

    </Routes>
  );
};
