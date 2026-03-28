import ProductCard from "./ProductCard";

const ProductGrid = ({ watches }) => {
  return (
    <div className='products-grid'>
      {watches.map((ele) => {
        return <ProductCard key={ele.id} watch={ele} />;
      })}
    </div>
  );
};

export default ProductGrid