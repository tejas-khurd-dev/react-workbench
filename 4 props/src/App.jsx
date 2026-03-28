import Card from "./components/card"

const App = () => {
  return (
    <div className="card-container">
      <Card user = "Tejas Khurd" age = {19} img = "https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation-thumbnail.jpg"/> {/* Here we are passing object of 
      {
      user: "temp",
      age: 18, 
      img: "url"
      } 
      */}

      {/*
      Note: number should be pass in curly bracket 
      */}

      <Card user = "Harsh Dhuri" age = {19} img = "https://i.pinimg.com/736x/35/18/d5/3518d59b998b2662450760296dcd3071.jpg" />

      <Card user = "Vedant Desai" age = {19} img = "https://i.pinimg.com/736x/a8/82/c7/a882c78583244f99785547e6c6463c90.jpg" />
    </div>
  )
}

export default App