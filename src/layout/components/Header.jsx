import { NavLink, Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      {/* this will be home page  */}
      <Link>
        <img
          className="logo"
          src="public/images/logo-bicycle.svg"
          alt="bicycle logo"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Bikes</NavLink>
          </li>
          <li>
            <NavLink>Repair</NavLink>
          </li>
          <li>
            <NavLink>Contact Us</NavLink>
          </li>
          {/* Connect -> use an icon instead  */}
          <li>
            <NavLink>
              <img src="public/images/user-solid.svg" alt="user icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
