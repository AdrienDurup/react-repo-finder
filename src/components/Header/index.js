// modules
import { Navigate, NavLink } from "react-router-dom";

// assets
import logo from '/src/assets/images/logo-github.png';


const Header = () => {
console.log("header");
  return (
    <>
      <img src={logo} className="github_logo" alt="github logo" />
      <NavLink to="/">Repo Finder</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
    </>
  )
}

export default Header;
