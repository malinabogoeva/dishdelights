import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">DishDelights Recipes</Link></li>
        <li><Link to="/favorites">Personal Favorites</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
