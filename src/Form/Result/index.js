import { rates } from "../../data";
import { StyledResult } from "./styled";

const Result = ({ amountToConvert, fromCurrency, toCurrency }) => {
  return (
    <StyledResult>
      Result:{" "}
      <strong>
        {(amountToConvert >= 0
          ? amountToConvert * rates[fromCurrency][toCurrency]
          : 0
        ).toFixed(2)}
      </strong>
    </StyledResult>
  );
};

export default Result;
