
const App = () => {
  function btnDoubleClicked (){
    console.log("dbl activated: btn is clicked");
  }

  function mouseEnter (){
    console.log("Mouse Enter");
  }

  function btnSingleClicked (){
    console.log("sgl actived: btn is explored");
  }

  function change (val){
    console.log(val);
  }

  return (
    <div>
      <button onMouseEnter={mouseEnter} onDoubleClick={btnDoubleClicked} >Click Here</button> 
      {/* don't call directly like onDoubleClick={btnDoubleClicked()} */}
      <button onClick={btnSingleClicked} >Explore This</button>

      <button onClick={() => console.log("Direct button is clicked")}>Direct Btn</button>

      <input onChange={() => console.log("User is typing")} type="text" placeholder="Enter Name"/>

      <input onChange={(ele) => console.log(ele.target.value)} type="text" placeholder="Enter Name"/>

      <input onChange={(ele) => (
        change(ele.target.value)
      )} type="text" placeholder="Enter Name"/>


      <div className="my-div" onMouseMove={(ele) => console.log(ele.clientX, ele.clientY)}></div>

      <div className="page" onWheel={(ele) =>{
        console.log(ele); 

        console.log("Page Scrolling");}}>
        </div>
    </div>
  )
}

export default App