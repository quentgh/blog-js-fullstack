import React, { useContext, useState } from "react";
import { redirect } from "react-router-dom";
import Button from "../../ui/Btn/Btn";
import InputWithError from "../../ui/InputWithError/InputWithError";
import { Request } from "../../../utils/request.js";
import { UserContext } from "../../contexts/UserContext.js";
import { useNavigate } from "react-router-dom";
import Btn from "../../ui/Btn/Btn";

function isEmailValid(email) {
  return email.includes("@") && email.includes(".");
}
function isPasswordValid(password) {
  return password.length >= 6;
}

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subscribeMsg, setSubscribeMsg] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const logUrl = "/users/login ";
  const inputData = {
    email: emailInput,
    password: passwordInput,
  };

  // Handle and Set functions
  function handleEmail(e) {
    setEmailInput(e.target.value);
  }
  function handlePassword(e) {
    setPasswordInput(e.target.value);
  }

  async function validate(e) {
    e.preventDefault();

    setEmailError(!isEmailValid(emailInput) ? "Wrong email!" : "");
    setPasswordError(
      !isPasswordValid(passwordInput) ? "Too short password" : ""
    );

    if (isEmailValid(emailInput) && isPasswordValid(passwordInput)) {
      const data = await Request.post(logUrl, inputData);

      const dataStatus = data.status;
      const dataMsg = data.data.message;

      if (dataStatus === 404) {
        setSubscribeMsg("User not found, please subscribe.");
        return;
      }
      if (dataStatus === 401) {
        setSubscribeMsg(dataMsg);
        return;
      }
      if (dataStatus === 200) {
        localStorage.setItem("token", data.data.token);
        setUser(data.data.user);
        setSubscribeMsg(
          "Thank you, you will be redirected to your profile page."
        );
        if (data.data.token) {
          navigate("/profile");
        }
        // this.props.history.push('/profile/');}
      }
    }
  }

  return (
    <div>
      <div>
        <h2>Sign in here</h2>
      </div>
      <form>
        <InputWithError
          inputType="email"
          placeholder="Your email"
          change={handleEmail}
          value={emailInput}
          errorMessage={emailError}
        ></InputWithError>
        <InputWithError
          inputType="password"
          placeholder="Your password"
          change={handlePassword}
          value={passwordInput}
          errorMessage={passwordError}
        ></InputWithError>
        <Btn onClick={validate}>Validate</Btn>
      </form>
      <p>{subscribeMsg}</p>
    </div>
  );
}
