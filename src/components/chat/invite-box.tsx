import React from "react";
import { useRef, useState } from "react";
export function InviteBox({
  setshowInviteBox,
  showInviteBox,
  setisActive,
  setMessageLog,
}: any) {
  const invite_input: any = useRef();
  const [istypePassword, setistypePassword] = useState(true);
  const ToggleInputRevealState = () => {
    const inputType = invite_input.current;
    if (inputType.type === "password") {
      inputType.type = "text";
      setistypePassword(false);
    } else {
      inputType.type = "password";
      setistypePassword(true);
    }
  };
  const JoinChat = () => {
    const getInputValue = invite_input.current.value;
    console.error("Input is blank");
    if (getInputValue === "") {
      setisActive(true);
      setMessageLog("Fill in the input field");
      setTimeout(() => {
        setisActive(false);
        setshowInviteBox(false);
      }, 5000);
    } else {
      console.info("localStorage is available");
      localStorage.setItem("chatinvite", getInputValue);
      setTimeout(() => {
        setshowInviteBox(false);
      }, 3000);
    }
  };
  return (
    <div className={showInviteBox ? "invite-box active" : "invite-box"}>
      <div id="inv-box">
        <div id="input">
          <input
            type="password"
            id="invite"
            ref={invite_input}
            name="invite"
            placeholder="Input a valid chat id"
            minLength={8}
            maxLength={10}
          />
          <i
            className={
              istypePassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
            }
            onClick={ToggleInputRevealState}
          ></i>
        </div>
        <button id="invite-btn" name="invite" onClick={JoinChat}>
          Join Now
        </button>
      </div>
    </div>
  );
}
