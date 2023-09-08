import React from "react";
import "./Modal.css";
const Modal = ({ scorePlayer1, scorePlayer2 }) => {
  return (
    <div className="modal">
      <div className="modal-title">
        {" "}
        Skor1:{scorePlayer1} Skor2:{scorePlayer2}
      </div>
      <div onClick={() => (window.location = "/")} className="modal-btn">
        Yeniden Başla
      </div>
    </div>
  );
};

export default Modal;
