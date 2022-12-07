import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/ButtonLogin";
import Header from "../../components/Header";
import Resume from "../../components/Resume";
import Form from "../../components/Form";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const data = localStorage.getItem("transactions");

  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountTotal = transactionsList
      .filter((item) => item.amount)
      .map((transaction) => Number(transaction.amount));

    const amount = amountTotal.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    // const amount = amountTotal.toLocaleString("pt-br", {
    //   style: "currency",
    //   currency: "BRL",
    // });

    const total = amount.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    setTotal(`${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />

      <Resume total={total} />

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </>
  );
};

export default Home;
