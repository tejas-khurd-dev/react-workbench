import { useEffect, useState } from "react"
import Button from "./components/Button"

const App = () => {
  const [theme, settheme] = useState("dark")
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Button theme={theme} settheme={settheme} />
    </div>
  )
}

export default App