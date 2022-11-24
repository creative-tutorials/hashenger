import { MapItem } from "../components/chat/mapitem";
import React from "react";
import ReactDOM from "react-dom/client";
export const FetchChatContent = async (
  getchatinviteId: any,
  parsedData: any,
  setchatname: any,
  setisActive: any,
  setMessageLog: any
) => {
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
export default FetchChatContent;