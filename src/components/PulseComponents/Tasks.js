import Records from '../../records.json';

const Tasks = () => {
  return (
    <div className="tasks">
      <h3>Tasks you initiated</h3>
      <p>Stay tuned with task you initiated</p>
      <div className="tasks-wrapper">
        <div className="tasks-user">
          <div>
            {Records[1].tasks &&
              Records[1].tasks.map((data) => {
                return Records[1].tasks ? (
                  <div key={data.id}>
                    <img src={data.img} alt={data.img}></img>
                  </div>
                ) : null;
              })}
          </div>
        </div>
        <div className="tasks-title-subt">
          <div>
            {Records[1].tasks &&
              Records[1].tasks.map((data) => {
                return Records[1].tasks ? (
                  <div key={data.id}>
                    <p>{data.title}</p>
                    <p>{data.subtitle}</p>
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
                  <div key={data.id}>
                    <p>{data.date}</p>
                    <p>{data.progress}</p>
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
