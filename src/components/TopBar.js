import { useState, useEffect, useRef } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const TopBar = () => {
  const [notifBadgeIsShown, setNotifBadgeShown] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
  });

  const refOne = useRef(null);

  const [listRef] = useAutoAnimate();

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
      <img className="logo-icon" src="images/logo.svg" alt="Logo icon" />
      <div
        className="notification-wrapper"
        ref={listRef}
        onClick={() =>
          notifBadgeIsShown === false
            ? setNotifBadgeShown(true)
            : setNotifBadgeShown(false)
        }
      >
        {!notifBadgeIsShown ? (
          <span className="notif-badge">{notifications.length}</span>
        ) : null}
        {notifBadgeIsShown ? <div className="dropdown">{listItems}</div> : null}

        <img
          className="notification-icon"
          src="images/notification.svg"
          alt="Notification icon"
          ref={refOne}
        />
      </div>
    </div>
  );
};

export default TopBar;
