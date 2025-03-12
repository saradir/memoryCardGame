export function Card({id, name, img, onCardClick}) {
  return (
    <div className="card" onClick={() => onCardClick(id)}>
      <img src={img} alt={name} />
      <h2>{name.charAt(0).toUpperCase()+name.slice(1)}</h2>
    </div>
  );
}