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
    axios.get("/waluty.json").then((response) => setRates(response.data));
  }, []);

  const EUR = 4.3;
  const USD = 5;

  const calculateResult = (event) => {
    event.preventDefault();
    let calculatedResult;

    switch (currency) {
      case "EUR":
        calculatedResult = amount / EUR;
        break;
      case "USD":
        calculatedResult = amount / USD;
        break;
      default:
        alert("Nieznana waluta");
        return;
    }

    setResult(`${amount} PLN = ${calculatedResult.toFixed(2)} ${currency}`);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleReset = () => {
    setAmount("");
    setCurrency("");
    setResult("");
  };

  return (
    <div className="App">
      <Container>
        <Form
          amount={amount}
          currency={currency}
          result={result}
          handleAmountChange={handleAmountChange}
          handleCurrencyChange={handleCurrencyChange}
          onSubmit={calculateResult}
          onReset={handleReset}
        />
        <Clock/>
      </Container>
    </div>
  );
}

export default App;
