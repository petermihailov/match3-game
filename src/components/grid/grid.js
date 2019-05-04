import React from 'react';
import {Mana, Health, Damage} from '../pieces';
import styles from './grid.scss';

const getPiece = (type, idx) => {
  const pieces = {
    1: <Mana level="low" />,
    2: <Mana level="mid" />,
    3: <Mana level="high" />,
    4: <Health />,
    5: <Damage />,
  };

  return (
    <div key={idx} className={styles.piece}>
      {pieces[type]}
    </div>
  );
};

export const Grid = ({data}) => (
  <div className={styles.grid}>
    {data.map(getPiece)}
  </div>
);
