import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
function Popup(props) {
  return (
    <div className="Popup__box">
      <div className="Popup__content">
        <div className="Popup__header">
          <OndemandVideoIcon className="Resrc__icon" />
          <h3 className="Resrc__type--title">Videos</h3>
        </div>
        <div className="Popup-links"></div>
        <div className="Popup__header">
          <ArticleIcon className="Resrc__icon" />
          <h3 className="Resrc__type--title">Articles</h3>
        </div>
        <div className="Popup-links"></div>
        <div className="Popup__header">
          <SchoolIcon className="Resrc__icon" />
          <h3 className="Resrc__type--title">Courses</h3>
        </div>
        <div className="Popup-links"></div>
      </div>
    </div>
  );
}

export default Popup;
