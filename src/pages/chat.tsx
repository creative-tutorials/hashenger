import { Sidebar } from "../components/chat/sidebar";
import { Body } from "../components/chat/body";
import { Sidebar2 } from "../components/chat/sidebar2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/modeStyle.css";
function ChatPage() {
  return (
    <div id="wrapper">
      <div className="wraper-content">
        <Sidebar />
        <Sidebar2 LazyLoadImage={LazyLoadImage} />
        <Body LazyLoadImage={LazyLoadImage} />
      </div>
    </div>
  );
}
export default ChatPage;
