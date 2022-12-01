import React, { useState } from "react";
import Input from "../../components/InputLogin";
import Button from "../../components/ButtonLogin";
import * as C from "./styled";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Inscrever-se" onClick={handleSignUp} />
        <C.LabelSignIn>
          Já tem uma conta ?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignIn>
      </C.Content>
    </C.Container>
  );
};

export default SignUp;
