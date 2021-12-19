import "./style.css";
import Input from "./Input";
import { useState } from "react";
import SignupButton from "./SignupButton";
import { Authentication } from "../../api";
import { UserInterface } from "../../interfaces";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isPassword } from "../../validators";

const Signup = ({
  user,
  setUser,
  toggleModal,
}: {
  user: UserInterface | null;
  setUser: (_: any) => any;
  toggleModal: (_: { text: string }) => any;
}) => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    Authentication.Signup({ email, password, username }).then((response) => {
      if (response.data) {
        setUser(response.data);
        navigation("/", { replace: true });
      } else {
        const errorMessage = response.status.response.data.details[0].message;
        if (!response.data) return toggleModal({ text: errorMessage });
      }
    });
  }

  return (
    <div className="Signup">
      <div className="Signup-container">
        <h1 className="Signup-title">Signup</h1>
        <div className="Signup-inputs">
          <Input
            type="email"
            placeholder="Email"
            validation={isEmail}
            onChange={setEmail}
          />
          <Input
            type="text"
            placeholder="Username"
            validation={() => true}
            onChange={setUsername}
          />
          <Input
            type="password"
            placeholder="Password"
            validation={isPassword}
            onChange={setPassword}
          />
          <Input
            type="password"
            placeholder="Re Password"
            validation={isPassword}
            onChange={setPassword}
          />
        </div>
        <div className="Signup-submit">
          <SignupButton onClick={handleClick} />
          <p className="Signup-text">
            Already have an account ?{" "}
            <Link to="forget" className="markdown-main">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
