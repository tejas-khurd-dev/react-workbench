import { Link, Outlet, useNavigate } from "react-router-dom";

const Product = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="product-list">
        <ul>
          <li>
            <Link to="/product/clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/product/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/product/food">Food</Link>
          </li>
        </ul>
      </div>

      <div className="maiHuDiv">
        Product
      </div>

      <div className="w-full flex gap-8 justify-center items-center">
        <button 
        className="p-3 bg-green-500 text-black rounded-lg"
        onClick={()=>{
          navigate(-1); // return to previous page
        }}
        >
          Back
        </button>

        <button 
        className="p-3 bg-green-500 text-black rounded-lg"
        onClick={()=>{
          navigate(+1); // go to next page
          // OR
          // navigate(1);
        }}
        >
          Next
        </button>
      </div>
      
      
      {/* 
      Here:
      /product → loads Product
      /product/food → loads Product + Food

      But where should Food appear inside Product?
      That place is defined by Outlet.

      */}

      <div className="product-outlet">
        <Outlet />
      </div>

    </div>
  )
}

export default Product