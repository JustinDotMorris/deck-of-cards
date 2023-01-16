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
  const [searchState, setSearchState] = useState(false);

  // console.log(valueState);

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
  }, [
    spadesState,
    diamondsState,
    clubsState,
    heartsState,
    valueState,
    searchState,
  ]);

  const getFilters = () => {
    // const test = masterCardState.filter((card) => {
    //   console.log(card.value);
    //   console.log(valueState);
    //   return card.value == valueState;
    // });
    console.log("running");
    if (
      !spadesState &&
      !diamondsState &&
      !clubsState &&
      !heartsState &&
      !searchState
    ) {
      setCardState(masterCardState);
    } else {
      setCardState(
        masterCardState.filter((card) => {
          if (spadesState && card.suit === "spades") {
            return card;
          }
          if (diamondsState && card.suit === "diamonds") {
            return card;
          }
          if (clubsState && card.suit === "clubs") {
            return card;
          }
          if (heartsState && card.suit === "hearts") {
            return card;
          }

          if (searchState && card.value == valueState) {
            return card;
          }
        })
      );
    }
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
        <Nav
          filterCards={filterCards}
          searchValue={setValueState}
          setSearchState={setSearchState}
          searchState={searchState}
        />
      </header>
      <main>
        {cardState.length && (
          <div className="app__card-holder">{cardsObjectJSX}</div>
        )}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
