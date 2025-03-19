import { Button } from 'react-bootstrap';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.root}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Кооперативные игры.net</h1>
        <Button>Добавить игру</Button>
      </div>
    </div>
  </header>
);
