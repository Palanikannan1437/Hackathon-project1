import React from "react";
import BlogTitle from "./BlogTitle";
import MyStarredInfo from "./MyStarredInfo.js";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

//uses the same styles as of MyBlogs.jsx
function addStarredBox(mybloginfo) {
  return (
    <BlogTitle
      key={mybloginfo.id}
      titleName={mybloginfo.title}
      date={mybloginfo.date}
    />
  );
}

const iconStyles = {
  descIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
};

function Starred() {
  return (
    <div className="myblogs__div">
      <BookmarksIcon style={iconStyles.descIcon} />
      <span className="myblogs__text">Starred</span>
      {MyStarredInfo.map(addStarredBox)}
    </div>
  );
}

export default Starred;
