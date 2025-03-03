import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    rates: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    setRatesData({
      rates: {},
      loading: true,
      error: null,
    });

    const currencyFetchTimer = setTimeout(() => {
      axios
        .get("/currencies.json")
        .then((response) => {
          setRatesData({
            rates: response.data,
            loading: false,
            error: null,
          });
        })
        .catch(() => {
          setRatesData({
            rates: {},
            loading: false,
            error: "Wystąpił błąd podczas pobierania danych walutowych.",
          });
        });
    }, 2000);

    return () => clearTimeout(currencyFetchTimer);
  }, []);

  return ratesData;
};

export default useCurrencyRates;
