import Records from "../../records.json";

const Calendar = (props) => {
  return (
    <div className="calendar">
      <h4>Calendar</h4>
      <div className="calendar-wrapper">
        <div className="calendar-list">
          <div className="calendar-name-date">
            <ul>
              {Records[3].calendar &&
                Records[3].calendar.map((data) => {
                  return Records[3].calendar ? (
                    <div key={data.id}>
                      <li>
                        <p className="p-calendar">{data.name}</p>
                      </li>
                      <p className="calendar-date">
                        {" "}
                        {new Date(data.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  ) : null;
                })}
            </ul>
          </div>
          <div className="calendar-status">
            <div>
              {Records[3].calendar &&
                Records[3].calendar.map((data) => {
                  return Records[3].calendar ? (
                    <div key={data.id} className="calendar-status-wrapper">
                      <p>{data.status}</p>
                    </div>
                  ) : null;
                })}
            </div>
          </div>
        </div>
        <div className="calendar-input">
          <div className="calendar-form-title">
            <img src="images/plus.png" Alt="Add" />
            <p className="p-calendar">Add new item</p>
          </div>
          <label for="fname">
            <p className="calendar-form-label">Meeting name</p>
          </label>
          <input className="calendar-input-field" type="text" id="fname" name="fname" />
          <br />
          <br />
          <label for="lname">
            <p className="calendar-form-label">Date</p>
          </label>
          <input className="calendar-input-field" type="date" id="lname" name="lname" />
          <br />
          <br />
          <input className="btn" type="submit" value="Submit"></input>
        </div>
      </div>
      <span
        className="calendar-close-btn"
        onClick={() => props.viewCalendar(false)}
      >
        <img src="images/cal-close-btn.png" alt="Close calendar button"/>
      </span>
    </div>
  );
};

export default Calendar;
