import { NavLink, Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img
          className="logo"
          src="/images/bicycle-logo.png"
          alt="bicycle logo"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={"bikes"}>Bikes</NavLink>
          </li>
          <li>
            <NavLink to={"service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="auth/login" className="auth-btn">
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
