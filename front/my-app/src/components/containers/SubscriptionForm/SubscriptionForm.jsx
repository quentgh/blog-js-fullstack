import React, { useState } from "react";
import Button from "../../ui/Btn/Btn";
import InputWithError from "../../ui/InputWithError/InputWithError";
import { Request } from "../../../utils/request.js";
import Btn from "../../ui/Btn/Btn";

function isEmailValid(email) {
  return email.includes("@") && email.includes(".");
}

function isPasswordValid(password) {
  return password.length >= 6;
}

function isPasswordConfirmValid(pwd, confirmPwd) {
  return pwd === confirmPwd;
}

export default function SubscriptionForm() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const [subscribeMsg, setSubscribeMsg] = useState("");

  const urlAddUser = "/users/subscribe ";

  const inputData = {
    email: emailInput,
    username: usernameInput,
    password: passwordInput,
  };

  function handleEmail(e) {
    setEmailInput(e.target.value);
  }

  function handleUsername(e) {
    setUsernameInput(e.target.value);
  }

  function handlePassword(e) {
    setPasswordInput(e.target.value);
  }

  function handleConfirmPassword(e) {
    setPasswordConfirmInput(e.target.value);
  }

  async function validate(e) {
    e.preventDefault();

    setEmailError(!isEmailValid(emailInput) ? "Wrong email shape" : "");
    setPasswordError(
      !isPasswordValid(passwordInput) ? "Too short password" : ""
    );
    setPasswordConfirmError(
      !isPasswordConfirmValid(passwordInput, passwordConfirmInput)
        ? "Passwords are not the same"
        : ""
    );

    if (
      isEmailValid(emailInput) &&
      isPasswordValid(passwordInput) &&
      isPasswordConfirmValid(passwordInput, passwordConfirmInput)
    ) {
      const data = await Request.post(urlAddUser, inputData);

      const dataStatus = data.status;
      const errorMsg = data.data.message;
      console.log(errorMsg);

      if (dataStatus === 401 && errorMsg === "Email is required.") {
        setSubscribeMsg("Email already exist");
        return;
      }
      if (dataStatus === 401 && errorMsg === "Username is required.") {
        setSubscribeMsg("Username is required");
        return;
      }
      if (dataStatus === 401 && errorMsg === "Email already exist, please choose another one.") {
        setSubscribeMsg("Email already exist, please choose another one.");
        return;
      }
      if (dataStatus === 401 && errorMsg === "Username already exist, please choose another one.") {
        setSubscribeMsg("Username already exist, please choose another one.");
        return;
      }
      setSubscribeMsg("Thank you for your subscribe");
    }
  }

  return (
    <div>
      <div>
        <h2>Sign up here</h2>
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
          inputType="text"
          placeholder="An username"
          change={handleUsername}
          value={usernameInput}
          errorMessage={usernameError}
        ></InputWithError>
        <InputWithError
          inputType="password"
          placeholder="Your password"
          change={handlePassword}
          value={passwordInput}
          errorMessage={passwordError}
        ></InputWithError>
        <InputWithError
          inputType="password"
          placeholder="Confirm your password"
          change={handleConfirmPassword}
          value={passwordConfirmInput}
          errorMessage={passwordConfirmError}
        ></InputWithError>
        <Btn onClick={validate}>Validate</Btn>
      </form>
      <p>{subscribeMsg}</p>
    </div>
  );
}
