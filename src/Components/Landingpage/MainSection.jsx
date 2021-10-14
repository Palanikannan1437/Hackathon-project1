import React, { useState } from "react";
import Modal from "react-modal";
import Signup from "./Signup";

function MainSection() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="MainContainer">
      <img
        className="mainsection__image"
        src="/Images/LandingPage/BackgroundImageMain.png"
        alt="Main"
      />
      <h1 className="title__main">Learn</h1>
      <p className="description__main">Cryptocurrency</p>
      <button
        type="button"
        className="button__main"
        onClick={() => setmodalIsOpen(true)}
      >
        <p className="buttondesc__main">Get Started Now</p>
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
        <Signup />
      </Modal>
      <Modal ></Modal>
    </div>
  );
}

export default MainSection;
