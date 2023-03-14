import React from "react";
import LoginForm from "../../containers/LoginForm/LoginForm";
import SubscriptionForm from "../../containers/SubscriptionForm/SubscriptionForm";
import Cards from "../../HOC/Cards/Cards";

export default function Auth() {
  return (
    <div>
      <Cards>
        <LoginForm />
      </Cards>
      <Cards>
        <SubscriptionForm />
      </Cards>
    </div>
  );
}