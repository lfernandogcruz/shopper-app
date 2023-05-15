import { useState } from "react";
import PropTypes from "prop-types";
import PricesContext from "./PricesContext";

const PricesProvider = ({ children }) => {
  const [prodId, setProdId] = useState('');
  const [prodName, setProdName] = useState('');
  const [prodCost, setProdCost] = useState(0);
  const [prodPrice, setProdPrice] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const contextValue = {
    prodId,
    setProdId,
    prodName,
    setProdName,
    prodCost,
    setProdCost,
    prodPrice,
    setProdPrice,
    isValid,
    setIsValid,
  };

  return (
    <PricesContext.Provider value={contextValue}>
      {children}
    </PricesContext.Provider>
  );
}

PricesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PricesProvider;
