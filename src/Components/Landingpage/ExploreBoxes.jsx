import React from "react";
import BookIcon from "@mui/icons-material/Book"; //for blogs
import AnalyticsIcon from "@mui/icons-material/Analytics"; //real time analysis
import CompareIcon from "@mui/icons-material/Compare"; //compare cyptocurr
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; //track your progress
import ImportContactsIcon from "@mui/icons-material/ImportContacts"; //learn crypto

const iconStyles = {
  otherIcons: {
    fontSize: "50px",
    color: "#FFFFFF",
    position: "absolute",
    top: "8%",
    left: "4%",
  },
};

function icon(iconName) {
  if (iconName === "Blog") return <BookIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Compare")
    return <CompareIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Progress")
    return <TrendingUpIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Analysis")
    return <AnalyticsIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Learn")
    return <ImportContactsIcon style={iconStyles.otherIcons} />;
}

function ExploreBoxes(props) {
  console.log(props.desc);
  return (
    <div style={{ backgroundColor: props.color }} className="exploreBox__div">
      {icon(props.logo)}
      <p className="exploreBoxTitle">{props.feature}</p>
      <p className="exploreBoxText">{props.desc}</p>
    </div>
  );
}

export default ExploreBoxes;
