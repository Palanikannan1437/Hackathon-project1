import React,{useRef} from "react";
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
  const myref = useRef(null);

  if(props.toScroll===true){
    myref.current.scrollIntoView();
    console.log("object")
  }

  return (
    <div ref={myref} className="exploreSection__div">
      {ExploreBoxContents.map(addExploreBox)}
    </div>
  );
}

export default ExploreSection;
