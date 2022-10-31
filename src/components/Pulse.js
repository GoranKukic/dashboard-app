import Title from './PulseComponents/Title';
import QuickItems from './PulseComponents/QuickItems';
import ItemsList from './PulseComponents/ItemsList';
import Tasks from './PulseComponents/Tasks';
import Actions from './PulseComponents/Actions';
import Calendar from './PulseComponents/Calendar';

const Pulse = () => {
  return (
    <div className="pulse">
      <div className="left-wrapper">
        <Title />
        <QuickItems />
        <ItemsList />
        <div className="tasks-actions-wrapper">
          <Tasks />
          <Actions />
        </div>
      </div>
      <div className="rightt-wrapper">
        <Calendar />
      </div>
    </div>
  );
};

export default Pulse;
