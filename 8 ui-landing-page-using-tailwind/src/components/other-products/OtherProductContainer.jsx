import OtherProductHeading from "./OtherProductHeading";
import OtherProductGrid from "./OtherProductGrid";

const OtherProductContainer = ({ products }) => {
  return (
    <div className='other-products-container'>
      <OtherProductHeading />
      <OtherProductGrid products={products} />
    </div>
  )
}

export default OtherProductContainer