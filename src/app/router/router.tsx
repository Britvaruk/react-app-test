import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { publicRoutes } from "./routes";
import { ErrorPage } from "pages/error";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}      
    </Route>,
  ),
);

export default router;