import "./App.scss";
import "./styles/_reset.scss";
import cards from "./data/cards";
// import Main from "./containers/Main/Main";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

const App = () => {
  const [masterCardState, setMasterCardState] = useState(cards);
  const [cardState, setCardState] = useState(cards);
  const [spadesState, setSpadesState] = useState(false);
  const [diamondsState, setDiamondsState] = useState(false);
  const [clubsState, setClubsState] = useState(false);
  const [heartsState, setHeartsState] = useState(false);

  console.log(spadesState);
  const stateToggles = (suit) => {
    if (suit === "spades") {
      setSpadesState(!spadesState);
    }
    if (suit === "diamonds") {
      setDiamondsState(!diamondsState);
      console.log(diamondsState);
    }
    if (suit === "clubs") {
      setClubsState(!clubsState);
    }
    if (suit === "hearts") {
      setHeartsState(!heartsState);
    } else if (suit === null || suit === undefined) {
      setSpadesState(false);
      setDiamondsState(false);
      setClubsState(false);
      setHeartsState(false);
    }
  };
  // console.log(cardState);

  if (spadesState === true) {
    console.log(spadesState);

    setCardState(
      cardState.filter((card) => {
        console.log(cardState);
        return card.suit === "spades";
      })
    );
  }

  const cardsObjectJSX = cardState.map((card) => {
    return (
      <Card
        key={card.id}
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
        <Nav filterCards={stateToggles} />
      </header>
      <main>
        <div className="app__card-holder">{cardsObjectJSX}</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
// } else return card;
// if (card.suit === suit) return suit;
// return card.suit === suit;

// const handleSpades = () => {
//   setSpadesState(!true);
// };
