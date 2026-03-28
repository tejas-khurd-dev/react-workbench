import { Link,useNavigate } from "react-router-dom";

const Electronics = () => {

  const navigate = useNavigate();
    const btnClicked = () => {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-10">
      <div className="maiHuDiv">Electronics</div>

      <Link className="product-link" to="/product">
        Go to product
      </Link>

      <button 
      className="p-3 bg-green-500 text-black rounded-lg"
      onClick={btnClicked}
      >Home</button>

    </div>
  );
};

export default Electronics;