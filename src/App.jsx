import "./App.scss";
import "./styles/_reset.scss";
import cards from "./data/cards";
// import Main from "./containers/Main/Main";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";

const App = () => {
  const cardsObjectJSX = cards.map((card) => {
    return (
      <Card
        suit={card.suit}
        colour={card.colour}
        value={card.value}
        symbol={card.symbol}
      />
    );
  });

  return (
    <div className="app">
      <header className="app-header">
        <img
          className="app--header-image"
          src="https://www.stir.ac.uk/media/stirling/news/news-centre/2021/june/Bridge-card-game_BANNER_1920x689.jpg"
          alt=""
        />
        <Nav />
      </header>
      <main>
        <div className="app__card-holder">{cardsObjectJSX}</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
