import Records from '../../records.json';

const ItemsList = () => {
  return (
    <div className="items-list">
      <div className="items-list-date">
        <h4>Date</h4>
        <div>
          {Records[0].itemsList &&
            Records[0].itemsList.map((data) => {
              return Records[0].itemsList ? (
                <div key={data.id}>
                  <p>{data.date}</p>
                </div>
              ) : null;
            })}
        </div>
      </div>
      <div className="items-list-title">
        <h4>Title</h4>
        <div>
          {Records[0].itemsList &&
            Records[0].itemsList.map((data) => {
              return Records[0].itemsList ? (
                <div key={data.id}>
                  <p>{data.title}</p>
                </div>
              ) : null;
            })}
        </div>
      </div>
      <div className="items-list-business">
        <h4>Budiness unit</h4>
        <div>
          {Records[0].itemsList &&
            Records[0].itemsList.map((data) => {
              return Records[0].itemsList ? (
                <div key={data.id}>
                  <p>{data.businessUnit}</p>
                </div>
              ) : null;
            })}
        </div>
      </div>
      <div className="items-list-user">
        <h4>With user</h4>
        <div>
          {Records[0].itemsList &&
            Records[0].itemsList.map((data) => {
              return Records[0].itemsList ? (
                <div key={data.id}>
                  <img src={data.userImg} alt={data.userImg}></img>
                </div>
              ) : null;
            })}
        </div>
      </div>
      <div className="items-list-delay">
        <h4>Delay</h4>
        <div>
          {Records[0].itemsList &&
            Records[0].itemsList.map((data) => {
              return Records[0].itemsList ? (
                <div key={data.id}>
                  <p>{data.delay}</p>
                </div>
              ) : null;
            })}
          <img src={''} alt={''}></img>
        </div>
      </div>
      <div className="items-list-status">
        <h4>Status</h4>
        <div>
          {Records[0].itemsList &&
            Records[0].itemsList.map((data) => {
              return Records[0].itemsList ? (
                <div key={data.id}>
                  <p>{data.status}</p>
                </div>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
