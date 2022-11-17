export default function FormComponent({
  style,
  ChangePswrdInputType,
  setisPassword,
  isPassword,
  password_,
}: any) {
  return (
    <div id={style.form}>
      <div id={style.input_field}>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          autoComplete="off"
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
        <div id={style.action_button} onClick={ChangePswrdInputType}>
          <i
            className={isPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
          ></i>
        </div>
      </div>
      <div id={style.button}>
        <button>Login</button>
      </div>
    </div>
  );
}
