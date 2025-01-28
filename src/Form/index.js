import {
  StyledForm,
  Legend,
  Input,
  Select,
  Button,
  ResultView,
} from "./styled";

const Form = ({
  amount,
  currency,
  result,
  handleAmountChange,
  handleCurrencyChange,
  onSubmit,
  onReset,
}) => (
  <StyledForm onSubmit={onSubmit}>
    <Legend>Currency converter</Legend>
    <p>
      <Input
        type="number"
        required
        min="1"
        step="any"
        value={amount}
        onChange={handleAmountChange}
      />
      PLN
      <Select
        name="currencies"
        required
        value={currency}
        onChange={handleCurrencyChange}
      >
        <option value="">Select currencies</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </Select>
    </p>
    <p>
      <Button type="submit">Convert</Button>
      <Button type="button" onClick={onReset}>
        Reset form
      </Button>
    </p>
    <ResultView>
      Result: <span className="form__result">{result}</span>
    </ResultView>
  </StyledForm>
);

export default Form;
