import LazyLoad from "react-lazy-load";
import style from "../styles/style.module.css";
import { AuthenticateUser } from "../function/AuthenticateUser"
function Account() {
  return (
    <LazyLoad>
      <div id={style.flex}>
        <div id={style.left}>
          <div id={style.content}>
            <h2>Hashenger</h2>
            <h4>Sign In to Start Chatting</h4>
            <p>
              <i className="fa-solid fa-circle-info"></i>
              Please note you must have a valid Google account to use this
              service
            </p>
          </div>
        </div>
        <div className={style.right}>
          <div id={style.login} onClick={AuthenticateUser}>
            <i className="fa-brands fa-google"></i>Sign in with Google
          </div>
        </div>
      </div>
    </LazyLoad>
  );
}
export default Account;
