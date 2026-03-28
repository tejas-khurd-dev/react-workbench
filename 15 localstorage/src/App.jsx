const App = () => {

  localStorage.setItem("name", "Tejas");
  localStorage.setItem("age", "18");

  let val1 = localStorage.getItem("name");

  let val2 = localStorage.getItem("age");
  
  console.log(val1, val2);




  localStorage.removeItem("age")

  localStorage.clear();



  localStorage.setItem("user", 
    JSON.stringify({
      name: "Tejas Sandeep Khurd",
      age: 18,
      city: "Mumbai"
    }))

  let val3 = localStorage.getItem("user");
  console.log(`typeof(val3) is ${typeof(val3)} now in JSON.parse it will convert into object`);
  
  console.log(JSON.parse(val3));
  



  return (
    <div>App</div>
  )
}

export default App