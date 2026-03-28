import ViewProductsHeading from "./ViewProductsHeading";
import ProductGrid from "./ProductGrid";

const ProductContainer = ({watches}) => {
  return (
    <div className='products-container'>
      <ViewProductsHeading />
      <ProductGrid watches={watches} />
    </div>
  )
}

export default ProductContainer