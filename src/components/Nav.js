import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li className="list-item">
          <Link to="/" className="link">
            <img
              className="nav-item-img"
              src="images/pulse.svg"
              alt="Pulse icon"
            />
            Pulse
          </Link>
        </li>
        <li className="list-item">
          <Link to="/meeting" className="link">
            <img
              className="nav-item-img"
              src="images/meeting.svg"
              alt="Meeting icon"
            />
            Meeting
          </Link>
        </li>
        <li className="list-item">
          <Link to="/items" className="link">
            <img
              className="nav-item-img"
              src="images/items.svg"
              alt="Items icon"
            />
            Items
          </Link>
        </li>
        <li className="list-item">
          <Link to="/actions" className="link">
            <img
              className="nav-item-img"
              src="images/actions.svg"
              alt="Actions icon"
            />
            Actions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
