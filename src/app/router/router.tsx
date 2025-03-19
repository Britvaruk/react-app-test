import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { publicRoutes } from './routes';
import { ErrorPage } from 'pages/error';
import { Layout } from './layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} element={<Layout />}>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  )
);

export default router;
