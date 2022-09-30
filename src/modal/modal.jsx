import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {

  // document.addEventListener('keydown', function(e) {
  //   if (e.key === 'Escape') {
  //   setActive(false)
  //   }
  //   });

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;