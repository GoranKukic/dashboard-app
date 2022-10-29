import pulseIcon from '../images/pulse.svg';
import meetingIcon from '../images/meeting.svg';
import itemsIcon from '../images/items.svg';
import actionsIcon from '../images/actions.svg';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li className="list-item">
          <img className="nav-item-img" src={pulseIcon} alt="Pulse icon" />
          Pulse
        </li>
        <li className="list-item">
          <img className="nav-item-img" src={meetingIcon} alt="Meeting icon" />
          Meeting
        </li>
        <li className="list-item">
          <img className="nav-item-img" src={itemsIcon} alt="Items icon" />
          Items
        </li>
        <li className="list-item">
          <img className="nav-item-img" src={actionsIcon} alt="Actions icon" />
          Actions
        </li>
      </ul>
    </div>
  );
};

export default Nav;
