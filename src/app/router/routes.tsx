import { HomePage } from 'pages/home';
import { ProfilePage } from 'pages/profile';
import { Paths } from 'shared/config';

export const publicRoutes = [
  {
    path: Paths.Root,
    element: <HomePage />
  },
  {
    path: Paths.Profile,
    element: <ProfilePage />
  }
];
