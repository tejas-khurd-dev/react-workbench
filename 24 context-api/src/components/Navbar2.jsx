import { useContext } from "react"
import { helloContext, postDataContext } from "../context/ThemeContext"

const Navbar2 = () => {
  
  const data1 = useContext(postDataContext)
  console.log(data1);

  const data2 = useContext(helloContext)
  console.log(data2);
  
  return (
    <div className="nav2">
      <h1>link</h1>
      <h1>link</h1>
      <h1>{data2}</h1>
      <h1 onClick={() => {
        if(data1.theme === "light")
          data1.settheme("dark")
        else data1.settheme("light")
      }}>{data1.theme}</h1>
    </div>
  )
}

export default Navbar2