import { useState, useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <h2>Child Component</h2>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        Unmount Component
      </button>

      {show && <Child />}

      {/* agar show = true  → <Child /> render hoga */}
      {/* agar show = false → kuch bhi render nahi hoga */}
    </div>
  );
}

export default App;