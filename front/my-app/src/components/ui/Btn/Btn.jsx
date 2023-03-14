import React from "react";
import myClasses from "./Btn.module.css";

export default function Btn(props) {
  return (
    <div>
      <button className={myClasses.btn} onClick={props.onClick}>{props.children}</button>
    </div>
  );
}
