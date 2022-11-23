import { InviteBox } from "../components/chat/invite-box";
import { useState } from "react";
import { Sidebar } from "../components/chat/sidebar";
import { Body } from "../components/chat/body";
import { Sidebar2 } from "../components/chat/sidebar2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Toast } from "../components/Toast/toast";
import "../styles/modeStyle.css";
import style from "../styles/style.module.css";
function ChatPage() {
  const [isActive, setisActive] = useState(false);
  const [MessageLog, setMessageLog] = useState();
  const [showInviteBox, setshowInviteBox] = useState(false);
  return (
    <div id="wrapper">
      <div className="wraper-content">
        <Sidebar />
        <Sidebar2
          LazyLoadImage={LazyLoadImage}
          setshowInviteBox={setshowInviteBox}
        />
        <Body
          LazyLoadImage={LazyLoadImage}
          setisActive={setisActive}
          setMessageLog={setMessageLog}
        />
        <InviteBox
          setshowInviteBox={setshowInviteBox}
          showInviteBox={showInviteBox}
          setisActive={setisActive}
          setMessageLog={setMessageLog}
        />
      </div>
      <Toast isActive={isActive} MessageLog={MessageLog} style={style} />
    </div>
  );
}
export default ChatPage;
