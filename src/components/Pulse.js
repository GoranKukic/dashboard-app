import { useState } from "react";
import Title from "./PulseComponents/Title";
import QuickItems from "./PulseComponents/QuickItems";
import ItemsList from "./PulseComponents/ItemsList";
import Tasks from "./PulseComponents/Tasks";
import Actions from "./PulseComponents/Actions";
import Calendar from "./PulseComponents/Calendar";
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Pulse = () => {

  const [openCalendar, setOpenCalendar] = useState(false);

  const [listRef] = useAutoAnimate();

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
      <div className="right-wrapper" ref={listRef}>
        {openCalendar ? <Calendar viewCalendar={setOpenCalendar} /> : null}
      </div>
      <span className="calendar-open-btn" onClick={() => setOpenCalendar(true)}>
        <img src="images/cal-open-btn.png" alt="Open calendar button"/>
      </span>
    </div>
  );
};

export default Pulse;
