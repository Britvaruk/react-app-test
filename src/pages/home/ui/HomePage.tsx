import { GamesList } from 'features/games';
import Button from 'react-bootstrap/esm/Button';
import styles from './HomePage.module.scss';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/games')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addGame = (item: any) => {
    fetch('http://localhost:3001/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, data]);
      });
    // .catch(error => {
    //   console.error('Ошибка при добавлении товара:', error);
    // });
  };

  return (
    <div className={styles.root}>
      <Button onClick={() => addGame({ name: 'Игра', price: 11 })}>Добавить игру</Button>
      <GamesList items={items} />
    </div>
  );
};
