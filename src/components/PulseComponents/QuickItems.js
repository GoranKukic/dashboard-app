import MeetingsIcon from '../../images/meeting.svg';
import ItemsIcon from '../../images/items.svg';
import ActionsIcon from '../../images/actions.svg';
import RemindersIcon from '../../images/reminders.svg';
import NotesIcon from '../../images/notes.svg';

const QuickItems = () => {
  const quickItemsList = [
    {
      title: 'Meetings',
      number: 23,
      iconUrl: MeetingsIcon,
    },
    {
      title: 'Items',
      number: 11,
      iconUrl: ItemsIcon,
    },
    {
      title: 'Actions',
      number: 15,
      iconUrl: ActionsIcon,
    },
    {
      title: 'Reminders',
      number: 9,
      iconUrl: RemindersIcon,
    },
    {
      title: 'Notes',
      number: 18,
      iconUrl: NotesIcon,
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
              <div className="qc-img-wrap">
                <img
                  className="qc-img"
                  //src={require(`${item.iconUrl}`).default}  --- dynamic maping of images is not working
                  src={item.iconUrl}
                  alt={item.title}
                />
              </div>

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
