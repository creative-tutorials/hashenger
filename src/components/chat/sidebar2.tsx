import React from "react";
import { useRef } from "react";
import { SearchText } from "../../function/SearchText";
export function Sidebar2({ LazyLoadImage, setshowInviteBox }: any) {
  const search_input: any = useRef();
  return (
    <div className="sidebar-2">
      <div className="sideHeader">
        <h2>Chats</h2>
        <div className="cta">
          <i
            className="fa-regular fa-user-plus"
            onClick={() => {
              setshowInviteBox(true);
            }}
          ></i>
          <div id="spotlight">Join Chat</div>
        </div>
      </div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search Chats"
          onKeyUp={() => {
            SearchText(search_input);
          }}
          ref={search_input}
        />
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
          <h3>Welcome to Hashtag Messenger</h3>
        </div>
      </div>
    </div>
  );
}
