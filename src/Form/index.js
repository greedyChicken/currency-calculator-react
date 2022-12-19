import { useState } from "react";
import "./style.css";

const Form = () => {
  const [amountToConvert, setAmountToConvert] = useState("");
  const [fromCurrency, setFromCurrency] = useState("pln");
  const [toCurrency, setToCurrency] = useState("eur");
  const [rates] = useState({
    pln: {
      pln: 1,
      usd: 0.23,
      eur: 0.21,
    },
    usd: {
      usd: 1,
      pln: 4.44,
      eur: 0.95,
    },
    eur: {
      eur: 1,
      pln: 4.67,
      usd: 1.05,
    },
  });

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
      <p className="footer">
        Result:
        <strong>
          {(amountToConvert >= 0
            ? amountToConvert * rates[fromCurrency][toCurrency]
            : 0
          ).toFixed(2)}
        </strong>
      </p>
    </>
  );
};

export default Form;
