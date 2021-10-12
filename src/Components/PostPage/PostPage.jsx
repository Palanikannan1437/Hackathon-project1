import React from "react";
import NavigationBar from "../NavigationBar";

function PostPage() {
  return (
    <div className="PostPage__div">
      <NavigationBar itemcolor="#FFFFFF" bgcolor="#5B10A8" />
      <h4 className="Post__title">Create a Post</h4>
      <hr className="Post__line" />
      <select className="Post__topic">
        <option value="none" selected disabled hidden>
          Choose a Topic
        </option>
        <option>Investments</option>
        <option>Transactions</option>
        <option>Bitcoin Mining</option>
      </select>
      <div className="Postbox__container">
        <div className="PostBox">
          <input type="text" placeholder="Title" className="PostTitle"></input>
          <div className="Post__Additions">
            <button className="Post">Post</button>
            <button className="Post__options">Photos</button>
            <button className="Post__options">Links</button>
            <button className="Post__options">Polls</button>
          </div>
          <textarea
            className="Post__area"
            placeholder="Text (optional)"
          ></textarea>
          <div className="Post__buttons">
            <button className="Posting__options">Save</button>
            <button className="Posting__options">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
