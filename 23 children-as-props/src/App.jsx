import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, settheme] = useState("light")
  return (
    <div className="nav">
      <Navbar theme={theme}>
        <h1>I am children of navbar</h1>
        <h2>I am h2</h2>
      </Navbar>
    </div>
  )
}

export default App