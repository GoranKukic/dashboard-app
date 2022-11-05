import Records from "../../records.json";

const Actions = () => {
  const colorFunction = (percentage) => {
    if (percentage >= 90) {
      return { backgroundColor: "green", width: percentage + "%" };
    } else if (percentage >= 65) {
      return { backgroundColor: "blue", width: percentage + "%" };
    } else if (percentage >= 35) {
      return { backgroundColor: "orange", width: percentage + "%" };
    } else {
      return { backgroundColor: "red", width: percentage + "%" };
    }
  };

  return (
    <div className="actions">
      <div className="actions-headline">
        <h4>Overdue Actions</h4>
        <p className="p-gray">You’ re late, hurry up! </p>
      </div>

      <div className="actions-wrapper">
        <div className="actions-user">
          {Records[2].actions &&
            Records[2].actions.map((data) => {
              return Records[2].actions ? (
                <div key={data.id} className="actions-single-user">
                  <img src={data.img} alt={data.img}></img>
                </div>
              ) : null;
            })}
        </div>
        <div className="actions-title-subt">
          <div>
            {Records[2].actions &&
              Records[2].actions.map((data) => {
                return Records[2].actions ? (
                  <div key={data.id} className="actions-title-subt-single">
                    <div>
                      <p className="p-standard">{data.title}</p>
                      <p className="p-gray">{data.subtitle}</p>
                    </div>
                  </div>
                ) : null;
              })}
          </div>
        </div>
        <div className="actions-date-progress">
          <div>
            {Records[2].actions &&
              Records[2].actions.map((data) => {
                return Records[2].actions ? (
                  <div key={data.id} className="actions-date-progress-single">
                    <div>
                      <p className="p-gray">
                        {new Date(data.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                      <div className="progress-bar">
                        <div
                          className="bar-fill"
                          style={colorFunction(data.progress)}
                        >
                          <p>{data.progress}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </div>
      <span className="actions-shadow"></span>
    </div>
  );
};

export default Actions;

