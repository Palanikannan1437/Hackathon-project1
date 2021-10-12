import React from "react";
import BlogTitle from "./BlogTitle";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import myblogsinfo from "./MyBlogInfo";

function addMyBlogsBox(mybloginfo) {
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

function MyBlogs() {
  return (
    <div className="myblogs__div">
      <DescriptionSharpIcon style={iconStyles.descIcon} />
      <span className="myblogs__text">My Blogs</span>
      {myblogsinfo.map(addMyBlogsBox)}
    </div>
  );
}

export default MyBlogs;
