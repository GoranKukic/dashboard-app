import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Records from '../../records.json';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Fragment>
      {Records[0].itemsList &&
        Records[0].itemsList.map((data) => {
          return Records[0].itemsList ? (
            <div className="modal">
              <h3 className="modal-headline">Quick view</h3>
              <div className="modal-body">
                <div key={data.id} className="quick-view-content">
                  <p>{data.quickView}</p>
                </div>
              </div>
              <div className="modal-buttons">
                <button onClick={props.onClose} className="btn">
                  Ok
                </button>
                <button onClick={props.onClose} className="btn">
                  Close
                </button>
              </div>
            </div>
          ) : null;
        })}
    </Fragment>
  );
};

const portalElement = document.getElementById('overlays');

const ItemsListModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default ItemsListModal;
