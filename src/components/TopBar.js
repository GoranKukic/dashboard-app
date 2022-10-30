import { useState, useEffect, useRef } from 'react';
import { Effect } from 'react-notification-badge';
import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import logoIcon from '../images/logo.svg';
import notificationIcon from '../images/notification.svg';

const TopBar = () => {
  const [notifBadgeIsShown, setNotifBadgeShown] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
  });

  const refOne = useRef(null);

  const handleClick = (e) => {
    if (!refOne.current.contains(e.target)) {
      setNotifBadgeShown(false);
    }
    if (refOne.current.contains(e.target)) {
      setNotifBadgeShown(false);
    }
  };

  const notifications = ['Notification 1', 'Notification 2'];

  let listItems = notifications.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return (
    <div className="top-bar">
      <img className="logo-icon" src={logoIcon} alt="Logo icon" />
      <div
        className="notification-wrapper"
        onClick={() =>
          notifBadgeIsShown === false
            ? setNotifBadgeShown(true)
            : setNotifBadgeShown(false)
        }
      >
        {!notifBadgeIsShown ? (
          <NotificationBadge
            className="notif-badge"
            count={notifications.length}
            effect={Effect.SCALE}
          />
        ) : null}
        {notifBadgeIsShown ? <div className="dropdown">{listItems}</div> : null}

        <img
          className="notification-icon"
          src={notificationIcon}
          alt="Notification icon"
          ref={refOne}
        />
      </div>
    </div>
  );
};

export default TopBar;
