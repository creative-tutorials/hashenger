import { Toast } from "../components/Toast/toast";
import style from "../styles/style.module.css";
import tial from "../styles/tokn.module.css";
import { useState } from "react";
function TokenGenerate() {
  const [cryptText, setcryptText] = useState("");
  const [isActive, setisActive] = useState(false);
  const [MessageLog, setMessageLog] = useState();
  function AddMouseEvent() {
    const interval = setInterval(() => {
      let length = 8,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      setcryptText(retVal);
      return retVal;
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }
  const GenerateChatToken = async () => {
    const getSessionStorage: any = localStorage.getItem("session.auth");
    const parsedData = JSON.parse(getSessionStorage);
    console.log(parsedData);
    try {
      const response = await fetch("http://localhost:8080/create", {
        method: "POST",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          email: parsedData.email,
          password: parsedData.password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
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
  return (
    <div id={tial.tkn_wrapper} onMouseEnter={AddMouseEvent}>
      <div id={tial.token_bx}>
        <h1>
          Token ID <span>{cryptText}</span>
        </h1>
        <div id={tial.tkn_fild}>
          <input type="password" placeholder="Token Here" readOnly value={""} />
          <div id={tial.generateBtn}>
            <button onClick={GenerateChatToken}>Generate New Token</button>
          </div>
        </div>
      </div>
      <Toast isActive={isActive} MessageLog={MessageLog} style={style} />
    </div>
  );
}
export default TokenGenerate;
