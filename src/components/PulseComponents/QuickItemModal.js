import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">
        <h3>Create quick Item</h3>
        <h4>ADD QUICK ITEM</h4>
          <button onClick={props.onClose}>Ok</button>
          <button onClick={props.onClose}>Close</button>
        <div className="modal-body">
          <label for="modaltitle">
            <p className="modal-form-label">Item title</p>
          </label>
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const QuickItemModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay/>, portalElement)}
    </Fragment>
  );
};

export default QuickItemModal;