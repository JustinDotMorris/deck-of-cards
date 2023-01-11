import "./App.scss";
import "./styles/_reset.scss";
import cards from "./data/cards";
import Main from "./containers/Main/Main";

function App() {
  console.log(cards);
  return (
    <div className="app">
      <header className="App-header">
        <img
          className="app--header-image"
          src="https://www.stir.ac.uk/media/stirling/news/news-centre/2021/june/Bridge-card-game_BANNER_1920x689.jpg"
          alt=""
        />
      </header>
      <main>
        <Main cards={cards} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
