import { Search, ShoppingBag, Menu } from "lucide-react";

const NavIcons = () => {
  return (
    <div className="navbar-actions">
      <button className="navbar-icon-btn">
        <Search className="navbar-icon" />
      </button>

      <button className="navbar-icon-btn">
        <ShoppingBag className="navbar-icon" />
      </button>
      
      <button className="navbar-menu-btn">
        <Menu className="navbar-icon" />
      </button>
    </div>
  )
}

export default NavIcons