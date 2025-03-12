export function Card({name, img, onCardClick}) {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}