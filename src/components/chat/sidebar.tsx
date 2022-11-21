import React from "react";
export function Sidebar({}) {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fa-light fa-comment-lines"></i>
      </div>
      <div id="route">
        <i className="fa-light fa-comment active"></i>
        <i className="fa-light fa-user"></i>
        <i className="fa-light fa-box-archive"></i>
      </div>
    </div>
  );
}
