import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CommentIcon from "@mui/icons-material/Comment";
function BlogSection(props) {
  return (
    <div className="Blog__box">
      <div className="Author__section">
        <AccountCircleIcon className="Account__icon" />
        <div className="Author__details">
          <h5 className="Author__name">{props.author}</h5>
          <h6 className="Blog__date">{props.date}</h6>
        </div>
      </div>
      <img className="Blog__img" src={props.blogimg} alt="Blog's Pictures" />
      <h3 className="Blog__title">{props.blogname}</h3>
      <p className="Blog__desc">{props.blogdesc}</p>
      <div className="Blogopt__section">
        <BookmarksIcon className="Bookmark__icon" />
        <CommentIcon className="Comment__icon" />
      </div>
    </div>
  );
}
export default BlogSection;
