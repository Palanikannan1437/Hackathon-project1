import React from "react";
import { Link } from "react-router-dom";

function SubSection(props) {
  const classname = "subsection__";
  const classname3 = "subsectionImg__";
  const classname1 = "title__sub";
  const classname2 = `title__sub ${classname1.concat(props.title)}`;
  const path = "/" + props.pathtitle;
  return (
    <Link to={path}>
      <div className={classname.concat(props.title)}>
        <img
          className={classname3.concat(props.title)}
          src={props.bgUrl}
          alt={props.alt}
        />
        <span className={classname2}>{props.title}</span>
      </div>
    </Link>
  );
}

export default SubSection;
