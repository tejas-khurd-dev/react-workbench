import { ShoppingCart } from "lucide-react";

const OtherProductCard = ({ product }) => {

  return (
    <div className='other-product-card'>
      <div className='other-product-image-wrap'>
        <img src={product.image} alt={product.name} className='other-product-image' />
      </div>

      <div className="other-product-info-wrapper">
        <div className="other-product-info">
          <h3 className="other-product-name">{product.name}</h3>
          <button className='other-product-btn'>
            Add to <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherProductCard;