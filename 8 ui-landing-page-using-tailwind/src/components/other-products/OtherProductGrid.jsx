import OtherProductCard from "./OtherProductCard";

const OtherProductGrid = ({ products }) => {

  return (
    <div className='other-products-grid'>
      {products.map((item) => (
        <OtherProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default OtherProductGrid;