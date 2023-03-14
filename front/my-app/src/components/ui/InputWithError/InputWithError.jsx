import React from "react";

export default function InputWithError(
  {inputType,
  placeholder,
  change,
  value,
  errorMessage}
) {
  return (
    <div>
      <div>
        <input
          style={{
            padding: ".6em",
            margin: ".4em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "0.4em",
          }}
          type={inputType}
          placeholder={placeholder}
          onChange={change}
          value={value}
        />
      </div>
      <p>{errorMessage}</p>
    </div>
  );
}
