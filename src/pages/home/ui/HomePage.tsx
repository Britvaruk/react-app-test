import { GamesList } from 'features/games/ui/GamesList';
import { useState } from 'react';
import { Paths } from 'shared/config';

export const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Кооперативные игры</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Кликер {count}</button>
        <a href={Paths.Profile}>Профиль</a>
      </div>
      <GamesList></GamesList>
    </>
  );
};
