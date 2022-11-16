import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/modeStyle.css"
function ChatPage() {
  return (
    <div id="wrapper">
      <div className="wraper-content">
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
        <div className="sidebar-2">
          <div className="sideHeader">
            <h2>Chats</h2>
            <div className="cta">
              <i className="fa-regular fa-circle-plus"></i>
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
                width={45}
                height={45}
                src={"vite.svg"}
                effect="blur"
              />
              <h3>Vite Team</h3>
            </div>
            <div id="m4_msg">
              <p>Hello There!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPage;
