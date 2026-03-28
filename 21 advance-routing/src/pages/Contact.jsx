import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="maiHuDiv">Contacts</div>

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

export default Contact