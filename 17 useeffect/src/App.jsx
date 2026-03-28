import { useState, useEffect } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(100)

  // React me useEffect ka use hota hai side effects handle karne ke liye. Side effect ka matlab: Component render hone ke baad koi extra kaam karna.

  useEffect(() => {
    console.log("useEffect1 is running...");
  }); // render hone pr chalega oor konsibhi state change hone pr chalega

  useEffect(() => {
    console.log("useEffect2 is running...");
  },[]); // sirf ek baar render hone pr chalega kyuki hamne konsi bhi dependency add nahi ki hai in dependency array

  // Component mount hone ka matlab jab component pehli baar DOM me render hota hai.

  useEffect(() => {
    console.log("useEffect3 is running...");
  },[num]); // render hone pr chalega oor `num` state change hone pr chalega kyuki hamne num dependency add ki hai and `num2` change hone par nahi chalega


  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []); // --> component unmount hone pr component unmount chalega go and see "18 unmount component" to understand this

  return (
    <div>
      <h1>{num}</h1>
      
      <button onClick={() => setnum(prev => prev + 1)}>Click</button>
      
      <h1>{num2}</h1>
      <button onClick={() => setnum2(prev => prev+1)}> Click</button>
    </div>
  );
};

export default App;