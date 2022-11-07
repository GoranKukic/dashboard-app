import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <h3 className="modal-headline">Create quick Item</h3>
      <form>
        <div className="modal-body">
          <label for="modal-item-title" className="modal-form-label">
            Item title
          </label>
          <input
            className="modal-input-field"
            type="text"
            id="modal-item-title"
            name="modal-item-title"
          />
          <div className="modal-inner-fwrap">
            <div>
              <label for="modal-item-title" className="modal-form-label">
                Type
              </label>
              <input
                className="modal-input-field"
                type="text"
                id="modal-item-title"
                name="modal-item-title"
              />
              <label for="modal-item-title" className="modal-form-label">
                Due date
              </label>
              <input
                className="modal-input-field"
                type="text"
                id="modal-item-title"
                name="modal-item-title"
              />
              <div className="inner-wrapper">
                <p className="modal-form-label form-checkbox-title">
                  Job title
                </p>
                <div>
                  <input type="radio" id="huey" name="drone" value="huey" />
                  <label for="huey" className="modal-form-label checkbox-label">
                    Marketing coordinator
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="huey"
                    name="drone"
                    value="huey"
                    checked
                  />
                  <label for="huey" className="modal-form-label checkbox-label">
                    Web designer
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="huey"
                    name="drone"
                    value="huey"
                    checked
                  />
                  <label for="huey" className="modal-form-label checkbox-label">
                    prisident of saless
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label for="modal-item-title" className="modal-form-label">
                Business unit
              </label>
              <input
                className="modal-input-field"
                type="text"
                id="modal-item-title"
                name="modal-item-title"
              />
              <label for="modal-item-title" className="modal-form-label">
                Priority
              </label>
              <input
                className="modal-input-field"
                type="text"
                id="modal-item-title"
                name="modal-item-title"
              />
              <div className="inner-wrapper">
                <p className="modal-form-label form-checkbox-title">
                  Languages
                </p>
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="huey"
                    name="drone"
                    value="huey"
                    className="form-checkbox"
                  />
                  <label for="huey" className="modal-form-label checkbox-label">
                    Spanish
                  </label>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="huey" name="drone" value="huey" />
                  <label for="huey" className="modal-form-label checkbox-label">
                    Chinese
                  </label>
                </div>
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="huey" name="drone" value="huey" />
                  <label for="huey" className="modal-form-label checkbox-label">
                    Arabic
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label for="modal-item-title" className="modal-form-label">
              Objective
            </label>
            <input
              className="modal-input-field form-objective"
              type="text"
              id="modal-item-title"
              name="modal-item-title"
            />
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={props.onClose} className="btn">
            Submit
          </button>
          <button onClick={props.onClose} className="btn">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const QuickItemModal = (props) => {
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

export default QuickItemModal;
