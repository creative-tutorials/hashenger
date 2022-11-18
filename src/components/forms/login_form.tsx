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
  const email_field: any = useRef();
  const LoginToApp = async () => {
    const getEmailFieldValue = email_field.current.value;
    const getPswrdFieldValue = password_.current.value;

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        console.log(result);
        setisActive(true);
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
        <p id={style.forgot}>
          <Link to={"/forgot-password"}>
            <span>Forgot Password?</span>
          </Link>
        </p>
        <div id={style.action_button} onClick={ChangePswrdInputType}>
          <i
            className={isPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
          ></i>
        </div>
      </div>
      <div id={style.button} onClick={LoginToApp}>
        <button>Login</button>
      </div>
    </div>
  );
}
