import React from "react";
import { useRef } from "react";
export function Sidebar2({ LazyLoadImage, setshowInviteBox }: any) {
  const search_input: any = useRef();
  const SearchText = function () {
    // console.log('hello')
    const input = search_input.current.value;
    const filter = input.toLowerCase();
    // console.log(filter);
    const grp: any = document.querySelectorAll("#group_m4");
    for (let i = 0; i < grp.length; i++) {
      const element = grp[i];
      if (element.innerText.toLowerCase().includes(filter)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };
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
          onKeyUp={SearchText}
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
