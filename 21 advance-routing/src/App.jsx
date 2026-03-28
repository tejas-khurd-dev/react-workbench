import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Clothes from "./pages/Clothes";
import Food from "./pages/Food";
import Electronics from "./pages/Electronics";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

const App = () => {
  return (
    <>
      <Header />

      <div className="pageDiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product" element={<Product />}>
            <Route path="clothes" element={<Clothes />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="food" element={<Food />} />
          </Route>
          
          <Route path="/course" element={<Courses />} />

          {/* 

          Dynamic Routing:
          :id is a dynamic parameter


          eg: 
          /course/1
          /course/react
          /course/javascript
          If I type any of above eg i will get render in CourseDetail page

          */}

          <Route path="/course/:id" element={<CourseDetail />} /> {/* you can write anything instead of id */}
          <Route path="*" element={<NotFound />} /> {/* '*' matches any undefined route */}
        </Routes>
      </div>
          
      <Footer />
    </>
  );
};

export default App;