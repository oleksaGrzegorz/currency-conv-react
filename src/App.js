import { useState } from "react";
import "./index.css";
import Container from "./Container";
import Form from "./Form";
import Clock from "./Clock";
import useCurrencyRates from "./useCurrencyRates";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");

  const ratesData = useCurrencyRates();

  const calculateResult = (event) => {
    event.preventDefault();
    if (!ratesData.rates[currency]) {
      alert("Nieznana waluta");
      return;
    }
    setResult(
      `${amount} PLN = ${(amount / ratesData.rates[currency]).toFixed(
        2
      )} ${currency}`
    );
  };

  return (
    <div className="App">
      <Container>
        <Form
          amount={amount}
          currency={currency}
          result={result}
          rates={ratesData.rates}
          handleAmountChange={(event) => setAmount(event.target.value)}
          handleCurrencyChange={(event) => setCurrency(event.target.value)}
          onSubmit={calculateResult}
          onReset={() => {
            setAmount("");
            setCurrency("");
            setResult("");
          }}
          loading={ratesData.loading}
          error={ratesData.error}
        />
        <Clock />
      </Container>
    </div>
  );
}

export default App;
