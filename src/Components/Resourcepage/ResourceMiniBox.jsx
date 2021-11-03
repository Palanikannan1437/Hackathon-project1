import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Popup from "./Popup";

function ResourceMiniBox(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="Resource__box">
      <button className="Rsrc__button" onClick={() => setmodalIsOpen(true)}>
        <h4 className="Rsrc__topic">{props.rsrctitle}</h4>
      </button>
      <Modal appElement={document.getElementById('root') || undefined} isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
        <Popup />
      </Modal>
    </div>
  );
}
export default ResourceMiniBox;
