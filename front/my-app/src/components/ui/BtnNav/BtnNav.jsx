import React from "react";
import myClasses from "./BtnNav.module.css";

export default function BtnNav(props) {
  return (
    <div>
      <button className={myClasses.btn} onClick={props.onClick}>{props.children}</button>
    </div>
  );
}
