import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { UseMyPortfolio } from "../hooks/usePortfolio";
import { da } from "date-fns/locale/da";
import { Spinner } from "../Components/loading/loader/Spinner";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({});
  const { data,isPending } = UseMyPortfolio();
  console.log(data);

   useEffect(() => {
    if (!isPending && data) {
      setPortfolioData(data);
    }
  }, [data, isPending]);


if(isPending){
  return <Spinner/>
}

  console.log("Portfolio Datas", portfolioData);

  const updatePortfolioData = (newData) => {
    setPortfolioData((prev) => ({ ...prev, ...newData }));
  };

  const Value = { portfolioData, updatePortfolioData };

  return (
    <PortfolioContext.Provider value={Value}>
      {children}
    </PortfolioContext.Provider>
  );
};
export const usePortfolio = () => useContext(PortfolioContext);
