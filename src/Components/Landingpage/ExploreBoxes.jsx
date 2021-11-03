import React from "react";
import BookIcon from "@mui/icons-material/Book"; //for blogs
import AnalyticsIcon from "@mui/icons-material/Analytics"; //real time analysis
import CompareIcon from "@mui/icons-material/Compare"; //compare cyptocurr
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; //track your progress
import ImportContactsIcon from "@mui/icons-material/ImportContacts"; //learn crypto
import { useSpring, animated } from 'react-spring';

const iconStyles = {
  otherIcons: {
    fontSize: "50px",
    color: "#FFFFFF",
    position: "absolute",
    top: "8%",
    left: "4%",
  },
};
const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];

const perspective = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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
  const [props2, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 200, friction: 80 },
  }));
  return (
    <animated.div 
    style={{ transform: props2.xys.interpolate(perspective), backgroundColor: props.color }} 
    className="exploreBox__div"
    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcXY(x, y) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })}>
      {icon(props.logo)}
      <p className="exploreBoxTitle">{props.feature}</p>
      <p className="exploreBoxText">{props.desc}</p>
    </animated.div>
  );
}

export default ExploreBoxes;
