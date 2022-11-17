import LazyLoad from "react-lazy-load";
import style from "../styles/style.module.css";
import { Link } from "react-router-dom";
import { AuthenticateUser } from "../function/AuthenticateUser";
import FormComponent from "../components/forms/register_form";
import { useRef, useState } from "react";
function Register() {
  const password_: any = useRef();
  /* @isPassword - Checks if password field is either type of password or text */
  const [isPassword, setisPassword] = useState(true);
  function ChangePswrdInputType() {
    // change password input type depending on the current type state
    const password_type = password_.current;
    if (password_type.type === "password") {
      password_type.type = "text";
      setisPassword(false);
    } else {
      password_type.type = "password";
      setisPassword(true);
    }
  }
  return (
    <div className={style.registerWrapper}>
      <div id={style.registerContent}>
        <header id={style.regisHeader}>
          <h1>Register</h1>
          <p>Create an account</p>
        </header>
        {/*  */}
        <FormComponent
          style={style}
          ChangePswrdInputType={ChangePswrdInputType}
          setisPassword={setisPassword}
          isPassword={isPassword}
          password_={password_}
        />
        <div id={style.bottom_footer}>
          <p>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
