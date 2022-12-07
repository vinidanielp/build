import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc) {
      alert("Informe a descrição!");
      return;
    } else if (!amount) {
      alert("Informe o valor!");
      return;
    } else if (amount <= 0) {
      alert("Valor não pode ser zero ou negativo!");
      return;
    } else if (!date) {
      alert("Informe a data!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      date: date,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Data</C.Label>
          <C.Input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </C.InputContent>

        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
