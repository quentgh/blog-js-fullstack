import React from "react";

export default function Cards(props) {
  return (
    <div
      style={{
        width: "60vw",
        backgroundColor: "hsl(0, 0%, 90%)",
        padding: "1em",
        margin: "2em auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "0.5em",
      }}
    >
      {props.children}
    </div>
  );
}