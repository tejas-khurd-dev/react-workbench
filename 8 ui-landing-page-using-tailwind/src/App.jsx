import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Ad from "./components/ad/Advertisement"
import Poster from "./components/posterFolder/Poster";
import ViewProducts from "./components/view-products/ViewProducts";
import OtherProducts from "./components/other-products/OtherProducts";



const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden select-none">

      <Navbar />
      <Hero />
      <Ad />
      <Poster />
      <ViewProducts />
      <OtherProducts />

    </div>
  )
}

export default App