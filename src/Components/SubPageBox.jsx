import React from "react";
import { Link } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useSpring, animated } from 'react-spring';

const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];

const perspective = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function SubPageBox(props) {
  const color = "#" + props.color1;
  const icon = function (name) {
    if (name === "LibraryBooksIcon") {
      return <LibraryBooksIcon className="Icons" />;
    } else if (name === "ChromeReaderModeIcon") {
      return <ChromeReaderModeIcon className="Icons" />;
    } else if (name === "DevicesOtherIcon") {
      return <DevicesOtherIcon className="Icons" />;
    }
  };

  const subclassname = "subpagebox__";
  const subclassname1 = "subpagetitle__";
  const subclassname2 = "subpagetext__";

  let path = "";
  if (props.feature__type === "InfoPage") {
    path = `/InfoPage`;
  } else if (props.feature__type === "BlogPage") {
    path = `/BlogPage`;
  } else if (props.feature__type === "ResourcePage") {
    path = `/Resource`;
  }

  const [props1, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 200, friction: 80 },
  }));
  return (
    <animated.div
      className={subclassname.concat(props.subid)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcXY(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props1.xys.interpolate(perspective),backgroundColor: color }}
    >
      <Link to={path} style={{ textDecoration: "none" }}>
        <button className="Subpage__button">
          <div className="Subpage__head">
            {icon(props.name)}
            <h2 className={subclassname1.concat(props.subid)}>
              {props.subtitle}
            </h2>
          </div>
          <p className={subclassname2.concat(props.subid)}>{props.subdesc}</p>
        </button>
      </Link>
    </animated.div>
  );
}
export default SubPageBox;
