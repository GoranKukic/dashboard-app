import { useState } from 'react';
import { Effect } from 'react-notification-badge';
import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import logoIcon from '../images/logo.svg';
import notificationIcon from '../images/notification.svg';

const TopBar = () => {
  const [notifBadgeIsShown, setNotifBadgeShown] = useState(true);
  //   const [dropdownIsShown, setDropdownShown] = useState(false);
  const notifications = ['Notification 1', 'Notification 2'];
  let listItems = '';

  return (
    <div className="top-bar">
      <img className="logo-icon" src={logoIcon} alt="Logo icon" />
      <div
        className="notification-wrapper"
        onClick={() => setNotifBadgeShown(false)}
      >
        {notifBadgeIsShown && (
          <NotificationBadge
            className="notif-badge"
            count={notifications.length}
            effect={Effect.SCALE}
          />
        )}
        {!notifBadgeIsShown && (
          <div className="dropdown">
            {
              (listItems = notifications.map((number) => (
                <li key={number.toString()}>{number}</li>
              )))
            }
          </div>
        )}

        <img
          className="notification-icon"
          src={notificationIcon}
          alt="Notification icon"
        />
      </div>
    </div>
  );
};

export default TopBar;
