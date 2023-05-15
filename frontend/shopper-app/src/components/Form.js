// import { useContext} from "react";
// import PricesContext from "../context/PricesContext";

function Form() {
  return (
    <div className="Form">
      <h2>Form</h2>
      <label htmlFor="prodId">Product ID</label>
      <input type="text" id="prodId" name="prodId" />
      <label htmlFor="prodName">Product Name</label>
      <input type="text" id="prodName" name="prodName" />
      <label htmlFor="prodCost">Product Cost</label>
      <input type="text" id="prodCost" name="prodCost" />
      <label htmlFor="prodPrice">Product Price</label>
      <input type="text" id="prodPrice" name="prodPrice" />
      <button
        type="button"
        onClick={() => console.log('Validar')}
        >
          Validar
        </button>
    </div>
  );
}

export default Form;
