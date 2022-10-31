import Records from '../../records.json';

const actions = () => {
  return (
    <div className="actions">
      <h3>Overdue Actions</h3>
      <p>You’ re late, hurry up! </p>
      <div className="actions-wrapper">
        <div className="actions-user">
          <div>
            {Records[2].actions &&
              Records[2].actions.map((data) => {
                return Records[2].actions ? (
                  <div key={data.id}>
                    <img src={data.img} alt={data.img}></img>
                  </div>
                ) : null;
              })}
          </div>
        </div>
        <div className="actions-title-subt">
          <div>
            {Records[2].actions &&
              Records[2].actions.map((data) => {
                return Records[2].actions ? (
                  <div key={data.id}>
                    <p>{data.title}</p>
                    <p>{data.subtitle}</p>
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

export default actions;
