import React from "react";
import ExploreBoxes from "./ExploreBoxes";
import ExploreBoxContents from "./ExploreBoxContent.js";

function addExploreBox(boxContent) {
  return (
    <ExploreBoxes
      key={boxContent.id}
      titleName={boxContent.title}
      logo={boxContent.logo}
      color={boxContent.color}
      feature={boxContent.feature}
      desc={boxContent.desc}
    />
  );
}

function ExploreSection(props) {
  return (
    <div className="exploreSection__div">
      {ExploreBoxContents.map(addExploreBox)}
    </div>
  );
}

export default ExploreSection;
