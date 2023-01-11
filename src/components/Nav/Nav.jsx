import "./Nav.scss";

const Nav = () => {
  return (
    <div>
      <div>
        <select
          className="nav__suit-dropdown"
          placeholder="Suit"
          name="dropdown"
          id="dropdown"
        >
          <option value="All Suits">All Suits</option>
          <option value="spades">Spades</option>
          <option value="diamonds">Diamonds</option>
          <option value="clubs">Clubs</option>
          <option value="hearts">Hearts</option>
        </select>
      </div>
      <div>
        <input type="checkbox" name="spades" id="spades" />
        <input type="checkbox" name="diamonds" id="diamonds" />
        <input type="checkbox" name="clubs" id="clubs" />
        <input type="checkbox" name="hearts" id="hearts" />
      </div>
    </div>
  );
};

export default Nav;
