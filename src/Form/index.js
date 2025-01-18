import "./style.css";

const Form = ({ amount, currency, result, handleAmountChange, handleCurrencyChange, onSubmit, onReset }) => (
    <form className="form" onSubmit={onSubmit}>
      <legend className="form__legend">Currency converter</legend>
      <p>
        <input
          className="form__input"
          type="number"
          required
          min="1"
          step="any"
          value={amount}
          onChange={handleAmountChange}
        />
        PLN to
        <select
          className="form__select"
          name="currencies"
          required
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="">Select currencies</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </p>
      <p>
        <button type="submit" className="form__button">
          Convert
        </button>
        <button type="button" onClick={onReset}>
          Reset form
        </button>
      </p>
      <p>You have <span className="form__result">{result}</span></p>
    </form>
  );
  
  export default Form;