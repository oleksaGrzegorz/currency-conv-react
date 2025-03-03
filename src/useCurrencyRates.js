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
        .get(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_7behyffiPYIlr4oWlMABA9JTNzB3nIrrW67RxEDN"
        )
        .then((response) => {
          setRatesData({
            rates: response.data.data || {},
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
