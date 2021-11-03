import React, { useState } from "react";
import Modal from "react-modal";
import GetStartedButton from "./GetStartedButton";
import Signup from "./Signup";

function MainSection() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModal = () => {
    setmodalIsOpen(true);
  };
  return (
    <div className="MainContainer">
      <img
        className="mainsection__image"
        src="/Images/LandingPage/BackgroundImageMain.png"
        alt="Main"
      />
      <h1 className="title__main">Learn</h1>
      <p className="description__main">Cryptocurrency</p>
      <GetStartedButton onClickOpenModal={openModal} />
      <Modal
        appElement={document.getElementById("root") || undefined}
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
      >
        <Signup />
      </Modal>
      {/* <Modal></Modal> */}
    </div>
  );
}

export default MainSection;
