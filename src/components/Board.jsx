import React from 'react';
import { Card } from './Card';

export function Board({cards, onCardClick}) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} name={card.name} img={card.image} onCardClick={onCardClick} />
      ))}
    </div>
  );
}