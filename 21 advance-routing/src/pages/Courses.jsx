import { useNavigate } from "react-router-dom";

const Courses = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="maiHuDiv">Courses</div>

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
        }}
        >
          Next
        </button>
      </div>
       
    </>
  )
}

export default Courses