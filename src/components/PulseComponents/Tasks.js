import Records from '../../records.json';

const Tasks = () => {
  const colorFunction = (percentage) => {
    if (percentage >= 91) {
      return { backgroundColor: 'green', width: percentage + '%' };
    } else if (percentage >= 61) {
      return { backgroundColor: 'blue', width: percentage + '%' };
    } else if (percentage >= 41) {
      return { backgroundColor: 'orange', width: percentage + '%' };
    } else {
      return { backgroundColor: 'red', width: percentage + '%' };
    }
  };

  return (
    <div className="tasks">
      <div className="tasks-headline">
        <h4>Tasks you initiated</h4>
        <p className="p-gray">Stay tuned with task you initiated</p>
      </div>

      <div className="tasks-wrapper">
        <div className="tasks-users">
          {Records[1].tasks &&
            Records[1].tasks.map((data) => {
              return Records[1].tasks ? (
                <div key={data.id} className="tasks-single-user">
                  <img src={data.img} alt={data.img}></img>
                </div>
              ) : null;
            })}
        </div>
        <div>
          <div>
            {Records[1].tasks &&
              Records[1].tasks.map((data) => {
                return Records[1].tasks ? (
                  <div key={data.id} className="tasks-title-subt-single">
                    <div>
                      <p className="p-standard">{data.title}</p>
                      <p className="p-gray">{data.subtitle}</p>
                    </div>
                  </div>
                ) : null;
              })}
          </div>
        </div>
        <div className="tasks-date-progress">
          <div>
            {Records[1].tasks &&
              Records[1].tasks.map((data) => {
                return Records[1].tasks ? (
                  <div key={data.id} className="tasks-date-progress-single">
                    <div>
                      <p className="p-gray">
                        {new Date(data.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
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
      <span className="tasks-shadow"></span>
    </div>
  );
};

export default Tasks;
