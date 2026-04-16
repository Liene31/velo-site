import { NavLink, Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="/images/velo1.svg" alt="bicycle logo" />
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
      <button className="menu hamburger-menu-open">
        <img src="/images/menu-open.svg" alt="hamburger menu open" />
      </button>
      <button className="menu hamburger-menu-close">
        <img src="/images/menu-close.svg" alt="hamburger menu open" />
      </button>
    </header>
  );
}
