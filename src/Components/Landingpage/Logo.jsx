import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
  const color1 = props.color;
  return (
    <Link to="/">
      <div className="WholeLogo">
        <img className="pic__logo" src="/Images/WebsiteLogo.png" alt="Logo" />
        <h3 style={{ color: color1 }} className="title__logo">
          Bitcoin
        </h3>
      </div>
    </Link>
  );
}

export default Logo;
