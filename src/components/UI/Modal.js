import React from "react";
import reactDom from "react-dom";
import css_classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={css_classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={css_classes.modal}>
      <div className={css_classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = ({ children, onClose }) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {reactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay> {children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
