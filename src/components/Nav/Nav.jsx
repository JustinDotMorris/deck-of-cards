import "./Nav.scss";
//add filterCards back
const Nav = ({ filterCards, searchValue }) => {
  return (
    <div className="nav__content">
      <div className="nav__dropdown-container">
        <input
          // when the search value changes = set the prop to the new value
          onChange={(event) => searchValue(event.target.value)}
          id="valueSearchInput"
          placeholder="Search..."
          type="text"
        />
        {/* <select
          className="nav--suit-dropdown"
          placeholder="Suit"
          name="dropdown"
          id="dropdown"
        >
          <option value="Values">All Values</option>
          <option value="A">A</option>
          <option value="A">2</option>
          <option value="A">3</option>
          <option value="A">4</option>
          <option value="A">5</option>
          <option value="A">6</option>
          <option value="A">7</option>
          <option value="A">8</option>
          <option value="A">9</option>
          <option value="A">10</option>
          <option value="A">J</option>
          <option value="A">Q</option>
          <option value="A">K</option>
        </select> */}
      </div>
      <div>
        <label className="nav--checkbox-labels" htmlFor="spades">
          ♠️
        </label>
        <input
          className="nav--checkbox"
          onClick={() => filterCards("spades")}
          // onClick={handleSpades}
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
