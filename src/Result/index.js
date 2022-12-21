import { rates } from "../data";
import "../data";

const Result = ({ amountToConvert, fromCurrency, toCurrency }) => {
  return (
    <p className="footer">
      Result:{" "}
      <strong>
        {(amountToConvert >= 0
          ? amountToConvert * rates[fromCurrency][toCurrency]
          : 0
        ).toFixed(2)}
      </strong>
    </p>
  );
};

export default Result;
