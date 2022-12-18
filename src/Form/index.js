import { useState } from "react";
import "./style.css";

const Form = () => {
  const [amountToConvert, setAmountToConvert] = useState("");

  return (
    <form className="form">
      <p>
        <label for="amount">
          <input
            className="form__input"
            type="number"
            name="amount"
            min="0"
            step="0.01"
            placeholder="Currency amount"
            value={amountToConvert}
            onChange={({ target }) => setAmountToConvert(target.value)}
          />
        </label>
      </p>
      <p>
        <label className="selectCurrency" for="fromCurrency">
          From:
          <select type="number" name="fromCurrency">
            <option value="pln">PLN</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
          </select>
        </label>
        <label className="selectCurrency" for="toCurrency">
          To:
          <select type="number" name="toCurrency">
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="pln">PLN</option>
          </select>
        </label>
      </p>
    </form>
  );
};

export default Form;
