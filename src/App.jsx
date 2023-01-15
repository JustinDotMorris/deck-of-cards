import "./App.scss";
import "./styles/_reset.scss";
import cards from "./data/cards";
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
  const [valueState, setValueState] = useState("");
  const [suitFilter, setSuitFilter] = useState("");

  console.log(valueState);
  // const handleSearch = cardState.filter((card) => {
  //   if (card.value.includes(valueState)) {
  //     // console.log(card);
  //     return setCardState(card);
  //   }
  // });

  // const handleSpades = () => {
  //   setSpadesState(!spadesState);
  //   console.log(spadesState);
  // };

  // const cardFilters = () => {
  //   let filteredCardArray = cardState.filter((card) => {
  //     if (spadesState === "true") {
  //       return spadesState.suit === "spades";
  //     }
  //   });
  //   return filteredCardArray;
  // };

  //when clicked
  const filterCards = (suit) => {
    // setSuitFilter(suit);
    setSpadesState(!spadesState);
    //if current suit is spades
    if (suit === "spades" && spadesState === true) {
      //set spadesState to be true
      //set cardsState to be only cards with spades
      setCardState(
        cardState.filter((card) => {
          return card.suit === "spades";
        })
      );
    }
    if (suit === "diamonds") {
      setDiamondsState(!diamondsState);
      setCardState(
        cardState.filter((card) => {
          return card.suit === "diamonds";
        })
      );
    }
    if (suit === "clubs") {
      setClubsState(!clubsState);
      setCardState(
        cardState.filter((card) => {
          return card.suit === "clubs";
        })
      );
    }
    if (suit === "hearts") {
      setHeartsState(!heartsState);
      setCardState(
        cardState.filter((card) => {
          return card.suit === "hearts";
        })
      );
    } else if (suit === null || suit === undefined) {
      setSpadesState(false);
      setDiamondsState(false);
      setClubsState(false);
      setHeartsState(false);
      setCardState(masterCardState);
    }
    console.log(suit);
  };

  //cardState.map
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
          // handleSpades={handleSpades}
          filterCards={filterCards}
          searchValue={setValueState}
        />
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

//old filters------------------------------
// console.log(cardState);
// const cardFilters = () => {
//   if (spadesState === false) {
//     setCardState(masterCardState);
//     return;
//   }
//   if (spadesState === true) {
//     console.log(spadesState);

//     setCardState(
//       cardState.filter((card) => {
//         console.log(cardState);
//         return card.suit === "spades";
//       })
//     );
//     setSpadesState(false);
//   }
// };
// cardFilters();
