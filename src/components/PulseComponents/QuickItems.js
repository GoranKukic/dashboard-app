const QuickItems = () => {
  const quickItemsList = [
    {
      title: 'Meetings',
      number: 23,
      iconUrl: '../../images/download.png',
    },
    {
      title: 'Items',
      number: 11,
      iconUrl: '../../images/items.svg',
    },
    {
      title: 'Actions',
      number: 15,
      iconUrl: '../../images/actions.svg',
    },
    {
      title: 'Reminders',
      number: 9,
      iconUrl: '../../images/reminders.svg',
    },
    {
      title: 'Notes',
      number: 18,
      iconUrl: '../../images/notes.svg',
    },
  ];

  return (
    <div className="quick-items">
      <div className="quick-cards">
        {quickItemsList.map((item) => (
          <div
            className={`qc qc-${item.title.toLowerCase()}`}
            key={item.title.toString()}
          >
            <div className="qc-upper">
              {/* src={item.iconUrl} */}
              <img
                className="qc-img"
                src={'../../images/download.png'}
                alt={item.title}
              />
              <p className="qc-number">{item.number}</p>
            </div>
            <div className="qc-lower">
              <p className="qc-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn">+ Quick item</button>
    </div>
  );
};

export default QuickItems;
