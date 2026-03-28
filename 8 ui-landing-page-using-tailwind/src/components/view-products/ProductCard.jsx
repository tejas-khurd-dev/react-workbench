import { ShoppingCart } from "lucide-react";

const ProductCard = ({ watch }) => {
  console.log(watch);
  
  return (
    <div className='product-card'>
      <div className='product-image-wrap'>
        <img src={watch.image} alt={watch.name} className='product-image' />
      </div>

      <div className="product-info-wrapper">
        <div className="product-info">
          <h3 className="product-name">{watch.name}</h3>
          <button className='product-btn'>
            Add to <ShoppingCart/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;