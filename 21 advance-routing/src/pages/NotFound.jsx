const NotFound = () => {
  return (
    <>
      <div className="maiHuDiv">404 | Page not found</div>

      <div className="w-full text-center">
        <button 
        className="p-3 bg-green-500 text-black rounded-lg"
        onClick={()=>{
          navigate(-1);
        }}
        >
          Back
        </button>
      </div>
       
    </>
  )
}

export default NotFound