import React from "react";
export function Body({ LazyLoadImage }: any) {
  return (
    <div className="chat_m3">
      <header>
        <LazyLoadImage
          alt="profile image"
          width={45}
          height={45}
          src={"vite.svg"}
          effect="blur"
        />
        <h3>Vite Team</h3>
      </header>
      <div id="m3_m4">
        <div className="usr">
          <LazyLoadImage
            alt="profile image"
            width={35}
            height={35}
            src={"vite.svg"}
            effect="blur"
          />
          <div id="details">
            <h3 id="sender">Vite Team</h3>
          </div>
        </div>
        <div id="group_m4">
          <div id="m4_msg">
            <p>Hello World!</p>
          </div>
          <p id="time">Nov 10 2022 10:30AM</p>
        </div>
      </div>
      <footer>
        <div id="footer-input-wrapper">
          <input
            type="text"
            placeholder="Type your message here"
            id="send-message"
          />
        </div>
        <div id="footer-cta">
          <i className="fa-solid fa-paperclip"></i>
          <i className="fa-solid fa-paper-plane-top"></i>
        </div>
      </footer>
    </div>
  );
}
