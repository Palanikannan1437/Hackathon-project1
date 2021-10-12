import React from "react";

function InfoSection(props) {
  const classname4 = "container__";
  return (
    <div className={classname4.concat(props.infobox)}>
      <img className="InfoImage" src={props.infoimg} alt="Pictures" />
      <h3 className="InfoTitle">{props.infotitle}</h3>
      <p className="InfoInfo">{props.info}</p>
      <button className="InfoButton">Read More</button>
    </div>
  );
}
export default InfoSection;
