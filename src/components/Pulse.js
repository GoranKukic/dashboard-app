import Title from './PulseComponents/Title';
import QuickItems from './PulseComponents/QuickItems';

const Pulse = () => {
  return (
    <div className="pulse">
      <div className="left-wrapper">
        <Title />
        <QuickItems />
      </div>
      <div className="Calendar"></div>
    </div>
  );
};

export default Pulse;
