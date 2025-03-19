import { Outlet } from 'react-router';
import { Header } from 'widgets/header';
import styles from './Layout.module.scss';

export const Layout = () => (
  <>
    <Header />
    <div className={styles.root}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  </>
);
