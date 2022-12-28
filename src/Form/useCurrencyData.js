import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencyData = () => {
  const [usdRates, setUsdRates] = useState(null);
  const [plnRates, setPlnRates] = useState(null);
  const [eurRates, setEurRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchOk, setFetchOk] = useState(true);
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.exchangerate.host/latest?symbols=USD,EUR,PLN&base=USD")
      .then((response) => {
        setUsdRates(response.data.rates);
        setLoading(false);
        setDate(response.data.date);
      })
      .catch(() => {
        setFetchOk(false);
      });
    axios
      .get("https://api.exchangerate.host/latest?symbols=USD,EUR,PLN&base=PLN")
      .then((response) => {
        setPlnRates(response.data.rates);
        setLoading(false);
      })
      .catch(() => {
        setFetchOk(false);
      });
    axios
      .get("https://api.exchangerate.host/latest?symbols=USD,EUR,PLN&base=EUR")
      .then((response) => {
        setEurRates(response.data.rates);
        setLoading(false);
      })
      .catch(() => {
        setFetchOk(false);
      });
  }, []);

  return {
    rates: {
      USD: usdRates,
      PLN: plnRates,
      EUR: eurRates,
    },
    loading: loading,
    fetchOk: fetchOk,
    date: date,
  };
};
