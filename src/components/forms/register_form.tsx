import { useRef } from "react";
import { Link } from "react-router-dom";
export default function FormComponent({
  style,
  ChangePswrdInputType,
  setisPassword,
  isPassword,
  password_,
  setisActive,
  setMessageLog,
}: any) {
  const username_field: any = useRef();
  const email_field: any = useRef();
  const RegisterAccount = async () => {
    const getUsernameFieldValue = username_field.current.value;
    const getEmailFieldValue = email_field.current.value;
    const getPswrdFieldValue = password_.current.value;

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          username: getUsernameFieldValue,
          email: getEmailFieldValue,
          password: getPswrdFieldValue,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setisActive(true);
        setTimeout(() => {
          setisActive(false);
        }, 5000);
        setMessageLog(result.code);
      }
      if (!response.ok) {
        const result = await response.json();
        setisActive(true);
        localStorage.setItem(
          "session.auth",
          JSON.stringify({
            username: getUsernameFieldValue,
            email: getEmailFieldValue,
            password: getPswrdFieldValue,
          })
        );
        setTimeout(() => {
          setisActive(false);
        }, 5000);
        setMessageLog(result.code);
      }
    } catch (err) {
      console.error(err);
      setisActive(true);
    }
  };
  return (
    <div id={style.form}>
      <div id={style.input_field}>
        <input
          type="text"
          id="email"
          placeholder="Enter Your Username"
          autoComplete="off"
          ref={username_field}
        />
      </div>
      <div id={style.input_field}>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          autoComplete="off"
          ref={email_field}
        />
      </div>
      <div id={style.input_field}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
          ref={password_}
        />
        <p id={style.recovery}>
          <Link to={"/recover-account"}>
            <span>Recover Account!</span>
          </Link>
        </p>
        <div id={style.action_button} onClick={ChangePswrdInputType}>
          <i
            className={isPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
          ></i>
        </div>
      </div>
      <div id={style.button} onClick={RegisterAccount}>
        <button>Register</button>
      </div>
    </div>
  );
}
