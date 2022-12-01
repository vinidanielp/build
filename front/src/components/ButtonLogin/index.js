import React from "react";
import * as C from "./styles";

const ButtonLogin = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.ButtonLogin type={Type} onClick={onClick}>
      {Text}
    </C.ButtonLogin>
  );
};

export default ButtonLogin;
