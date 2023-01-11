import "./Card.scss";

const Card = (cards) => {
  return (
    <div className="card">
      <div className={cards.colour}>
        <div className="card__top">
          <h4>{cards.value}</h4>
          <h5>{cards.symbol}</h5>
        </div>
        <div className="card__mid">
          <h5>{cards.symbol}</h5>
        </div>
        <div className="card__bot">
          <h5>{cards.symbol}</h5>
          <h4>{cards.value}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
