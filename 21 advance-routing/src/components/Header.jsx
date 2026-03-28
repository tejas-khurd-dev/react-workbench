import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/course">Courses</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header