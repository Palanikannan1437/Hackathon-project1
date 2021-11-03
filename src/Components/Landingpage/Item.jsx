import React, { useState } from "react";

function Item(props) {
  const [isHover, setIsHover] = useState(false);
  function changeHoverState() {
    setIsHover(true);
  }
  function changeHoverStateBack(e) {
    setIsHover(false);
  }
  const textColor = props.color;
  const hoverTextColor = props.hovercolor;
  const backgroundColor1 = props.bgcolor;
  const hoverbackgroundColor = props.hoverbgcolor;
  return (
    <p
      style={{
        color: isHover ? hoverTextColor : textColor,
        background: isHover ? hoverbackgroundColor : backgroundColor1,
        height: "72px",
      }}
      onMouseOver={changeHoverState}
      onMouseOut={changeHoverStateBack}
      onClick={props.scrollExplore}
      className="title__menu"
      href="/"
    >
      {props.option}
    </p>
  );
}

export default Item;
