import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Container from "./Container";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get("/currencies.json").then((response) => setRates(response.data));
  }, []);

  const calculateResult = (event) => {
    event.preventDefault();
    if (!rates[currency]) {
      alert("Nieznana waluta");
      return;
    }
    setResult(
      `${amount} PLN = ${(amount / rates[currency]).toFixed(2)} ${currency}`
    );
  };

  return (
    <div className="App">
      <Container>
        <Form
          amount={amount}
          currency={currency}
          result={result}
          rates={rates}
          handleAmountChange={(event) => setAmount(event.target.value)}
          handleCurrencyChange={(event) => setCurrency(event.target.value)}
          onSubmit={calculateResult}
          onReset={() => {
            setAmount("");
            setCurrency("");
            setResult("");
          }}
        />
        <Clock />
      </Container>
    </div>
  );
}

export default App;
