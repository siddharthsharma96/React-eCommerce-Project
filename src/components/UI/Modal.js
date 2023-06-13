import { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClosem, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className="modal-overlay" onClick={onClosem}></div>
          <div className="modals">
            <button type="close" className="modal-close" onClick={onClosem}>
              X
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </Fragment>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
