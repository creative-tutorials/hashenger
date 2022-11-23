import React from "react";
import { MapItem } from "./mapitem";
import ReactDOM from "react-dom/client";
import { useRef, useState, useEffect } from "react";
export function Body({ LazyLoadImage, setisActive, setMessageLog }: any) {
  const [isIDValid, setisIDValid] = useState(false);
  const [chatname, setchatname] = useState()
  const messageInputRef: any = useRef();
  const getSessionStorage: any = localStorage.getItem("session.auth");
  const getchatinviteId: any = localStorage.getItem("chatinvite");
  const parsedData = JSON.parse(getSessionStorage);
  useEffect(() => {
    if (getchatinviteId) {
      setisIDValid(true);
    } else {
      setisIDValid(false);
    }
  });
  const SendMessage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/chatio/${getchatinviteId}`,
        {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: parsedData.email,
            password: parsedData.password,
            chatbody: {
              message: messageInputRef.current.value,
              timestamp: "",
            },
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setisActive(true);
        setMessageLog(result.code);
        setTimeout(() => {
          setisActive(false);
        }, 5000);
      }
      if (!response.ok) {
        const result = await response.json();
        setisActive(true);
        setMessageLog(result.code);
        setTimeout(() => {
          setisActive(false);
        }, 5000);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const ErrorExpected = () => {
    const res = "Please join a chat with a valid chatid";
    setisActive(true);
    setMessageLog(res);
    setTimeout(() => {
      setisActive(false);
    }, 5000);
  };
  const FetchChatContent = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/connect/${getchatinviteId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_API_KEY,
          },
          body: JSON.stringify({
            email: parsedData.email,
            password: parsedData.password,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setchatname(result.chatname);
        const chatbody = result.body;
        ReactDOM.createRoot(
          document.getElementById("m3_m4") as HTMLElement
        ).render(
          <React.StrictMode>
            <MapItem resx={chatbody} />
          </React.StrictMode>
        );
      }
      if (!response.ok) {
        const result = await response.json();
        setisActive(true);
        setMessageLog(result.code);
        setTimeout(() => {
          setisActive(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="chat_m3" onLoad={FetchChatContent}>
      <header>
        <LazyLoadImage
          alt="profile image"
          width={45}
          height={45}
          src={"vite.svg"}
          effect="blur"
        />
        <h3>{chatname}</h3>
      </header>
      <div id="m3_m4">
        {/* <div id="group_m4">
          <div id="m4_msg">
            <p>Hello World!</p>
          </div>
          <p id="time">Nov 10 2022 10:30AM</p>
        </div> */}
      </div>
      <footer>
        <div id="footer-input-wrapper">
          <input
            type="text"
            placeholder="Type your message here"
            id="send-message"
            ref={messageInputRef}
          />
        </div>
        <div id="footer-cta">
          <i className="fa-solid fa-paperclip"></i>
          <i
            className="fa-solid fa-paper-plane-top"
            onClick={isIDValid ? SendMessage : ErrorExpected}
          ></i>
        </div>
      </footer>
    </div>
  );
}
