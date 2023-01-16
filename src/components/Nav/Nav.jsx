import "./Nav.scss";
const Nav = ({ filterCards, searchValue, setSearchState, searchState }) => {
  return (
    <div className="nav__content">
      <div className="nav__dropdown-container">
        <input
          onChange={(event) => {
            searchValue(event.target.value);
            setSearchState(!searchState);
          }}
          id="valueSearchInput"
          placeholder="Search..."
          type="text"
        />
      </div>
      <div>
        <label className="nav--checkbox-labels" htmlFor="spades">
          ♠️
        </label>
        <input
          className="nav--checkbox"
          onClick={() => filterCards("spades")}
          type="checkbox"
          name="spades"
          id="spades"
        />
        <label className="nav--checkbox-labels" htmlFor="diamonds">
          ♦️
        </label>
        <input
          className="nav--checkbox"
          onClick={() => filterCards("diamonds")}
          type="checkbox"
          name="diamonds"
          id="diamonds"
        />
        <label className="nav--checkbox-labels" htmlFor="clubs">
          ♣️
        </label>
        <input
          className="nav--checkbox"
          onClick={() => filterCards("clubs")}
          type="checkbox"
          name="clubs"
          id="clubs"
        />
        <label className="nav--checkbox-labels" htmlFor="hearts">
          ♥️
        </label>
        <input
          className="nav--checkbox"
          onClick={() => filterCards("hearts")}
          type="checkbox"
          name="hearts"
          id="hearts"
        />
      </div>
    </div>
  );
};

export default Nav;
