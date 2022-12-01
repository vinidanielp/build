import React from "react";
import * as C from "./styles";

const InputLogin = ({ type, placeholder, value, onChange }) => {
  return (
    <C.InputLogin
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputLogin;
