import { useCurrencyData } from "../useCurrencyData";
import { StyledResult, StyledDate } from "./styled";

const Result = ({ amountToConvert, fromCurrency, toCurrency }) => {
  const data = useCurrencyData();

  if (data.loading) return <StyledResult>Waiting..</StyledResult>;

  return data.fetchOk ? (
    <>
      <StyledResult>
        Result:{" "}
        <strong>
          {(amountToConvert > 0
            ? amountToConvert *
              data.rates[fromCurrency.toUpperCase()][toCurrency.toUpperCase()]
            : 0
          ).toFixed(2)}
        </strong>
      </StyledResult>
      <StyledDate>Rates actual on the day {data.date}</StyledDate>
    </>
  ) : (
    <StyledResult>
      There was a problem with getting data.
      <br /> Check your connection.
    </StyledResult>
  );
};

export default Result;
