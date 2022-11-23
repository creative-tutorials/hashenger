import { Toast } from "../components/Toast/toast";
import style from "../styles/style.module.css";
import tial from "../styles/tokn.module.css";
import { useState, useRef } from "react";
function GenChatIDPage() {
  const [ispwrdtype, setispwrdtype] = useState(true);
  const [isActive, setisActive] = useState(false);
  const [MessageLog, setMessageLog] = useState();
  const id_inputRef: any = useRef();
  const chatname_ref: any = useRef();
  const GenerateChatToken = async () => {
    const getSessionStorage: any = localStorage.getItem("session.auth");
    const parsedData = JSON.parse(getSessionStorage);
    console.log(parsedData.email);
    try {
      const response = await fetch("http://localhost:8080/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          chatid: "",
          chatname: chatname_ref.current.value,
          email: parsedData.email,
          password: parsedData.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        id_inputRef.current.value = result.generatedID;
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        setisActive(true);
        setTimeout(() => {
          setisActive(false);
        }, 5000);
        setMessageLog(result.code);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const SetPswrdType = async () => {
    const pswrdtype = id_inputRef.current;
    if (pswrdtype.type === "password") {
      pswrdtype.type = "text";
      setispwrdtype(false);
    } else {
      pswrdtype.type = "password";
      setispwrdtype(true);
    }
  };
  return (
    <div id={tial.tkn_wrapper}>
      <div id={tial.token_bx}>
        <h1>Set up your chat</h1>
        <div id={tial.tkn_fild}>
          <input type="text" placeholder="Your Chat Name" ref={chatname_ref} />
        </div>
        <div id={tial.tkn_fild}>
          <input
            type="password"
            placeholder="Chat ID"
            readOnly
            ref={id_inputRef}
          />
          <i className={ispwrdtype ? 'fa-solid fa-eye': 'fa-solid fa-eye-slash'} onClick={SetPswrdType}></i>
        </div>
        <div id={tial.generateBtn}>
          <button onClick={GenerateChatToken}>Generate New ID</button>
        </div>
      </div>
      <Toast isActive={isActive} MessageLog={MessageLog} style={style} />
    </div>
  );
}
export default GenChatIDPage;
