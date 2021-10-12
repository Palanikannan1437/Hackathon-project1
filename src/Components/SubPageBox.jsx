import React from "react";
import { Link } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";

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

  return (
    <div
      style={{ backgroundColor: color }}
      className={subclassname.concat(props.subid)}
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
    </div>
  );
}
export default SubPageBox;
