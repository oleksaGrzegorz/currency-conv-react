import {
  StyledForm,
  Legend,
  Input,
  Select,
  Button,
  ResultView,
  Loading,
} from "./styled";
import loadingIcon from "./images/loading.gif";

const Form = ({
  amount,
  currency,
  result,
  handleAmountChange,
  handleCurrencyChange,
  onSubmit,
  onReset,
  rates,
  loading,
}) => (
  <StyledForm onSubmit={onSubmit}>
    <Legend>Currency converter</Legend>
    {loading ? (
      <Loading>
          <img src={loadingIcon} alt="loading icon" />
      </Loading>
    ) : (
      <>
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
            {Object.keys(rates).map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
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
      </>
    )}
  </StyledForm>
);

export default Form;
