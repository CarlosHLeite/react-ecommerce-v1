import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tip-calculator">Tip Calculator</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
