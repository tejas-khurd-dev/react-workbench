import productWatch1 from "../../assets/images/product-watch-1.png";
import productWatch2 from "../../assets/images/product-watch-2.png";
import productWatch3 from "../../assets/images/product-watch-3.png";
import ProductContainer from "./ProductContainer";

import "./ViewProducts.css";



const ViewProducts = () => {

  const watches = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      image: productWatch2,
    },
    {
      id: 2,
      name: "Apple Watch Ultra 2",
      image: productWatch1,
    },
    {
      id: 3,
      name: "Apple Watch SE (2nd Gen)",
      image: productWatch3,
    },
  ];

  return (
    <>
      <section className='products-section'>
        <ProductContainer watches = {watches}/>
      </section>
    </>
  );
};

export default ViewProducts;