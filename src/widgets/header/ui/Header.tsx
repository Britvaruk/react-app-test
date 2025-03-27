import Button from 'react-bootstrap/esm/Button';
import styles from './Header.module.scss';
import { Paths } from 'shared/config';

export const Header = () => (
  <header className={styles.root}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Кооперативные игры.net</h1>
        <Button href={Paths.Profile}>Профиль</Button>
      </div>
    </div>
  </header>
);
