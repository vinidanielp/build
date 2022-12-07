import React, { useState } from "react";
import Input from "../../components/InputLogin";
import Button from "../../components/ButtonLogin";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <C.Label>SISTEMA DE LOGIN</C.Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleSignIn} />
        <C.LabelSignUp>
          <Link to="/signup">Esqueci minha senha</Link>
        </C.LabelSignUp>
      </C.Content>
    </C.Container>
  );
};

export default SignIn;
