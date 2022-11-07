import React, { useState } from 'react';
import QuickItemModal from './QuickItemsModal';

const QuickItems = () => {
  const quickItemsList = [
    {
      title: 'Meetings',
      number: 23,
      iconUrl: 'images/meeting.svg',
    },
    {
      title: 'Items',
      number: 11,
      iconUrl: 'images/items.svg',
    },
    {
      title: 'Actions',
      number: 15,
      iconUrl: 'images/actions.svg',
    },
    {
      title: 'Reminders',
      number: 9,
      iconUrl: 'images/reminders.svg',
    },
    {
      title: 'Notes',
      number: 18,
      iconUrl: 'images/notes.svg',
    },
  ];

  const [quickItemisShown, setQuickItemIsShown] = useState(false);

  const showQuickItemHandler = () => {
    setQuickItemIsShown(true);
  };

  const hideQuickItemHandler = () => {
    setQuickItemIsShown(false);
  };

  return (
    <div className="quick-items">
      <div className="quick-cards">
        {quickItemsList.map((item) => (
          <div
            className={`qc qc-${item.title.toLowerCase()}`}
            key={item.title.toString()}
          >
            <div className="qc-upper">
              <div className="qc-img-wrap">
                <img className="qc-img" src={item.iconUrl} alt={item.title} />
              </div>

              <p className="qc-number">{item.number}</p>
            </div>
            <div className="qc-lower">
              <p className="qc-title">{item.title}</p>
            </div>
            <span className="qc-shadow"></span>
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => showQuickItemHandler(true)}>
        + Quick item
      </button>
      {quickItemisShown ? (
        <QuickItemModal onClose={hideQuickItemHandler} />
      ) : null}
    </div>
  );
};

export default QuickItems;
