import Records from '../../records.json';

const Calendar = () => {
  return (
    <div className="calendar">
      <h3>Calendar</h3>
      <div className="calendar-wrapper">
        <div className="calendar-list">
          <div className="calendar-name-date">
            <div>
              {Records[3].calendar &&
                Records[3].calendar.map((data) => {
                  return Records[3].calendar ? (
                    <div key={data.id}>
                      <p>{data.name}</p>
                      <p>{data.date}</p>
                    </div>
                  ) : null;
                })}
            </div>
          </div>
          <div className="calendar-status">
            <div>
              {Records[3].calendar &&
                Records[3].calendar.map((data) => {
                  return Records[3].calendar ? (
                    <div key={data.id}>
                      <p>{data.status}</p>
                    </div>
                  ) : null;
                })}
            </div>
          </div>
        </div>
        <div className="calendar-input">
          <label for="fname">
            <p>Meeting name</p>
          </label>
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label for="lname">
            <p>Date</p>
          </label>
          <input type="date" id="lname" name="lname" />
          <br />
          <br />
          <input className="btn" type="submit" value="Submit"></input>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
