import React from "react";
export function Sidebar2({LazyLoadImage}:any) {
  return (
    <div className="sidebar-2">
      <div className="sideHeader">
        <h2>Chats</h2>
        <div className="cta">
          <i className="fa-regular fa-circle-plus"></i>
          <div id="spotlight">Create Chat</div>
        </div>
      </div>
      <div className="searchInput">
        <input type="text" placeholder="Search Chats" />
      </div>
      <div className="chat_list">
        <div className="profile">
          <LazyLoadImage
            alt="profile image"
            width={45}
            height={45}
            src={"vite.svg"}
            effect="blur"
          />
          <h3>Vite Team</h3>
        </div>
      </div>
    </div>
  );
}
