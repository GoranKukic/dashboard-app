const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li className="list-item">
          <img
            className="nav-item-img"
            src="images/pulse.svg"
            alt="Pulse icon"
          />
          Pulse
        </li>
        <li className="list-item">
          <img
            className="nav-item-img"
            src="images/meeting.svg"
            alt="Meeting icon"
          />
          Meeting
        </li>
        <li className="list-item">
          <img
            className="nav-item-img"
            src="images/items.svg"
            alt="Items icon"
          />
          Items
        </li>
        <li className="list-item">
          <img
            className="nav-item-img"
            src="images/actions.svg"
            alt="Actions icon"
          />
          Actions
        </li>
      </ul>
    </div>
  );
};

export default Nav;
