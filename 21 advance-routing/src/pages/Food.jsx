import { Link, useNavigate } from "react-router-dom";

const Food = () => {

  const navigate = useNavigate();
  const btnClicked = () => {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <div className="maiHuDiv">Food</div>

      <div className="product-link">
        <Link to="/product">Go to product</Link>
      </div>

      <button 
      className="p-3 bg-green-500 text-black rounded-lg"
      onClick={btnClicked}
      >Home</button>
      
    </div>
  );
};

export default Food;