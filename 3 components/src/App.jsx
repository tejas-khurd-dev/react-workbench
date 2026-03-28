import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Navbar from "./components/Navbar"

const App = () => {
  return ( 
    <>
      <Navbar />

      <div className="card-container"> {/* In react we write className insted of class*/}

        <Card1 />

        {Card2()} {/* For printing like thisv "fun()" curly brackets are necessary */}
        
        <Card2 />

      </div>
      
    </>
  )
}

export default App