import NavLogo from "./NavLogo";
import NavLinks from "./Navlinks";
import NavIcons from "./NavIcons";

const InnerNav = () => {
  return (
    <div className="navbar-inner">
      <NavLogo />
      <NavLinks />
      <NavIcons />
    </div>
  )
}

export default InnerNav