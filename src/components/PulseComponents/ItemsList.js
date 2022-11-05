import Records from "../../records.json";

const ItemsList = () => {
  return (
    <div className="items-list">
      <div className="items-list-date il-item-single">
        <h4 className="items-list-th">Date</h4>
        {Records[0].itemsList &&
          Records[0].itemsList.map((data) => {
            return Records[0].itemsList ? (
              <div key={data.id} className={`items-list-td`}>
                <span
                  className={`box ${data.status
                    .toLocaleLowerCase()
                    .split()
                    .join()}-start-line`}
                ></span>
                <div
                  className={`il-date-content ${data.status
                    .toLocaleLowerCase()
                    .split()
                    .join()}`}
                >
                  <div className="date-inner-wrap">
                    <p>
                      {new Date(data.date).toLocaleDateString("en-GB", {
                        month: "short",
                      })}
                    </p>
                    <p>
                      {new Date(data.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ) : null;
          })}
      </div>
      <div className="items-list-title il-item-single">
        <h4 className="items-list-th">Title</h4>
        {Records[0].itemsList &&
          Records[0].itemsList.map((data) => {
            return Records[0].itemsList ? (
              <div key={data.id} className="items-list-td il-title-content">
                <p>{data.title}</p>
              </div>
            ) : null;
          })}
      </div>
      <div className="items-list-business il-item-single">
        <h4 className="items-list-th">Business unit</h4>
        {Records[0].itemsList &&
          Records[0].itemsList.map((data) => {
            return Records[0].itemsList ? (
              <div key={data.id} className="items-list-td il-business-content">
                <p>{data.businessUnit}</p>
              </div>
            ) : null;
          })}
      </div>
      <div className="items-list-user il-item-single">
        <h4 className="items-list-th">With user</h4>
        {Records[0].itemsList &&
          Records[0].itemsList.map((data) => {
            return Records[0].itemsList ? (
              <div className="items-list-td il-user-content">
                <div className="user-img-wrapper">
                  {data.userImg === "" ? (
                    <img key={data.id} src={"images/user-363.png"} alt={data.title} />
                  ) : (
                    <img key={data.id} src={data.userImg} alt={data.title} />
                  )}
                </div>
              </div>
            ) : (
              <p>--</p>
            );
          })}
      </div>
      <div className="items-list-delay il-item-single">
        <h4 className="items-list-th">Delay</h4>
        {Records[0].itemsList &&
          Records[0].itemsList.map((data) => {
            return Records[0].itemsList ? (
              <div key={data.id} className="items-list-td">
                <div
                  className={`il-delay-content ${data.status
                    .toLocaleLowerCase()
                    .split()
                    .join()}`}
                >
                  <p>{data.delay}</p>
                </div>

                <img src="images/see-more.svg" alt="See more"></img>
              </div>
            ) : null;
          })}
      </div>
      <div className="items-list-status il-item-single">
        <h4 className="items-list-th">Status</h4>
        {Records[0].itemsList &&
          Records[0].itemsList.map((data) => {
            return Records[0].itemsList ? (
              <div key={data.id} className="items-list-td">
                <div
                  className={`il-status-content ${data.status
                    .toLocaleLowerCase()
                    .split()
                    .join()}`}
                >
                  <div className="background-box">
                    <p>{data.status}</p>
                  </div>
                </div>
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};

export default ItemsList;

