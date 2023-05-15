import { useContext} from "react";
import PricesContext from "../context/PricesContext";
import validations from "../helpers/validations";

function Form() {
  const {
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
  } = useContext(PricesContext);

  const runValidations = () => {
    const financialValidation = validations.financial(prodCost, prodPrice);
    const marketingValidation = validations.marketing(prodPrice, prodPrice);
    if (financialValidation.status && marketingValidation.status) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="Form">
      <h2>Form</h2>
      <label htmlFor="prodId">
        Product ID
      <input
        type="text"
        id="prodId"
        name="prodId"
        value={prodId}
        onChange={(e) => setProdId(e.target.value)}
      />
      </label>
      <label htmlFor="prodName">Product Name</label>
      <input
        type="text"
        id="prodName"
        name="prodName"
        value={prodName}
        onChange={(e) => setProdName(e.target.value)}
      />
      <label htmlFor="prodCost">Product Cost</label>
      <input
        type="number"
        id="prodCost"
        name="prodCost"
        value={prodCost}
        onChange={(e) => setProdCost(e.target.value)}
      />
      <label htmlFor="prodPrice">Product Price</label>
      <input
        type="number"
        id="prodPrice"
        name="prodPrice"
        value={prodPrice}
        onChange={(e) => setProdPrice(e.target.value)}
      />
      <button
        type="button"
        onClick={() => runValidations()}
        >
          VALIDAR
        </button>
        {isValid &&
          <button
            type="button"
            onClick={() => console.log('Atualizado com sucesso')}
          >
            ATUALIZAR
          </button>
        }
    </div>
  );
}

export default Form;
