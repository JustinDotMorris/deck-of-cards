import "./App.scss";
import "./styles/_reset.scss";
import cards from "./data/cards";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";

const App = () => {
  const [masterCardState, setMasterCardState] = useState(cards);
  const [cardState, setCardState] = useState(cards);
  const [spadesState, setSpadesState] = useState(false);
  const [diamondsState, setDiamondsState] = useState(false);
  const [clubsState, setClubsState] = useState(false);
  const [heartsState, setHeartsState] = useState(false);
  const [valueState, setValueState] = useState("");

  const filterCards = (suit) => {
    if (suit === "spades") {
      setSpadesState(!spadesState);
    }
    if (suit === "diamonds") {
      setDiamondsState(!diamondsState);
    }
    if (suit === "clubs") {
      setClubsState(!clubsState);
    }
    if (suit === "hearts") {
      setHeartsState(!heartsState);
    }
  };

  useEffect(() => {
    getFilters();
  }, [spadesState, diamondsState, clubsState, heartsState]);

  const getFilters = () => {
    setCardState(
      masterCardState.filter((card) => {
        if (spadesState === true && card.suit === "spades") {
          return card.suit === "spades";
        }
        if (diamondsState === true && card.suit === "diamonds") {
          return card.suit === "diamonds";
        }
        if (clubsState === true && card.suit === "clubs") {
          return card.suit === "clubs";
        }
        if (heartsState === true && card.suit === "hearts") {
          return card.suit === "hearts";
        }
        if (
          spadesState === false &&
          diamondsState === false &&
          clubsState === false &&
          heartsState === false
        ) {
          return card;
        }
      })
    );
  };

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
        <Nav filterCards={filterCards} searchValue={setValueState} />
      </header>
      <main>
        <div className="app__card-holder">{cardsObjectJSX}</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
