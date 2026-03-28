import { useNavigate, useParams } from "react-router-dom"

const CourseDetail = () => {

  const navigate = useNavigate();


  const params = useParams();

  console.log(params);
  
  console.log(params.id);
  // since you have use id in ':id' if you use ':courseId' then -->
  // console.log(params.courseID);
  

  return (
    <>
      <div className="maiHuDiv">CourseDetail: {params.id}</div>

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

export default CourseDetail