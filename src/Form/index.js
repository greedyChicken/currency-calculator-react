import { useState } from "react";
import Result from "../Result";
import "./style.css";

const Form = () => {
  const [amountToConvert, setAmountToConvert] = useState("");
  const [fromCurrency, setFromCurrency] = useState("pln");
  const [toCurrency, setToCurrency] = useState("eur");

  const onInputChange = ({ target }) => {
    setAmountToConvert(target.value);
  };

  return (
    <>
      <form className="form">
        <p>
          <label htmlFor="amount">
            <input
              className="form__input"
              type="number"
              name="amount"
              min="0"
              step="0.01"
              placeholder="Currency amount"
              value={amountToConvert}
              onChange={onInputChange}
            />
          </label>
        </p>
        <p>
          <label className="selectCurrency" htmlFor="fromCurrency">
            From:
            <select
              type="number"
              name="fromCurrency"
              value={fromCurrency}
              onChange={({ target }) => setFromCurrency(target.value)}
            >
              <option value="pln">PLN</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
          </label>
          <label className="selectCurrency" htmlFor="toCurrency">
            To:
            <select
              type="number"
              name="toCurrency"
              value={toCurrency}
              onChange={({ target }) => setToCurrency(target.value)}
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="pln">PLN</option>
            </select>
          </label>
        </p>
      </form>
      <Result
        amountToConvert={amountToConvert}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </>
  );
};

export default Form;
