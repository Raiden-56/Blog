import { Input } from "./Input";
import React, { useState } from "react";
import { Authentication } from "../../api";
import { LoginButton } from "./LoginButton";
import { UserInterface } from "../../interfaces";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isPassword } from "../../validators";
import styles from "../../styles/pages/Login.module.scss";

const Login = ({
  user,
  setUser,
  toggleModal,
}: {
  user: UserInterface | null;
  setUser: (_: any) => any;
  toggleModal: (_: { text: string }) => any;
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    Authentication.Login({ email, password }).then((response) => {
      console.log(response);
      if (response.data) {
        setUser(response.data);
        navigate("/", { replace: true });
      } else toggleModal({ text: "Invalid Email/Password, try again" });
    });
  }

  function handleKeyClick(event: React.KeyboardEvent) {
    if (event.key !== "Enter") return;
    console.log("Click");
    handleClick();
  }

  return (
    <div className={styles.main} onKeyPress={handleKeyClick}>
      <div className={styles.container}>
        <h1>Login</h1>
        <div className={styles.inputs}>
          <Input
            type="email"
            placeholder="Email"
            validation={isEmail}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            validation={isPassword}
            onChange={setPassword}
          />
        </div>
        <div className={styles.submit}>
          <LoginButton onClick={handleClick} />
          <p className={styles.text}>
            Don't have an account ?{" "}
            <Link to="/signup" className="markdown-main">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
