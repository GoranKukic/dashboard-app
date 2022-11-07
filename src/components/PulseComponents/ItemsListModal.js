import React from 'react';
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
              <div className="modal-form-body">
                <div key={data.id} className="items-list-td il-title-content">
                  <p>{data.quickView}</p>
                </div>
              </div>
              <div className="modal-from-buttons">
                <button onClick={props.onClose} className="btn">
                  Submit
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
      {ReactDOM.createPortal(<Backdrop className="backdrop" />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay className="modal" onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default ItemsListModal;
