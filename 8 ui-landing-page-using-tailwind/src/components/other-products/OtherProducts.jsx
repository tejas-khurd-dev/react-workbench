import iphone from "../../assets/images/iphone.png";
import mac from "../../assets/images/mac.png";
import ipad from "../../assets/images/ipad.png";
import OtherProductContainer from "./OtherProductContainer";

import "./OtherProducts.css";

const OtherProducts = () => {

  const otherProducts = [
    {
      id: 1,
      name: "iPad Pro",
      image: ipad,
    },
    {
      id: 2,
      name: "MacBook Air M3",
      image: mac,
    },
    {
      id: 3,
      name: "iPhone 17 Pro",
      image: iphone,
    },
  ];

  return (
    <section className='other-products-section'>
      <OtherProductContainer products={otherProducts} />
    </section>
  );
};

export default OtherProducts;