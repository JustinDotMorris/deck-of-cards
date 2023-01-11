import "./Card.scss";

const Card = (cards) => {
  return (
    <div>
      <h2>{cards.suit}</h2>
      <h3>{cards.colour}</h3>
      <h4>{cards.value}</h4>
      <h5>{cards.symbol}</h5>
    </div>
  );
};

export default Card;
