import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { t, i18n } = useTranslation();

  // takes the language string from onClick and change language
  function changeLanguage(langCode) {
    i18n.changeLanguage(langCode);
  }

  function handleHamburgerMenu() {
    setIsOpen((prev) => !prev);
    setIsDropdownOpen(false);
  }

  function handleNavLink() {
    //closes hamburger menu when NavLink clicked (Bikes, Contacts, Profile etc.)
    //otherwise user navigates to the page but manu stays open
    setIsOpen(false);
    //closes dropdown when specific item clicked
    setIsDropdownOpen(false);
  }

  //watches if screen is desktop or mobile
  //otherwise if on small screen menu is open and then it's resized, after resizing to small, menu is already open
  //here I am forcing the isOpen state to false when screen is big
  useEffect(() => {
    //defining when my nav is visible in the full not like hamburger
    const mediaWatcher = window.matchMedia("(min-width: 700px)");
    if (mediaWatcher.matches) {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }

    function isDesktop(e) {
      if (e.matches) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    }

    //listens if any changes in screen size
    //if the desktop size, force menu to false
    mediaWatcher.addEventListener("change", isDesktop);

    // clean up
    return function cleanup() {
      mediaWatcher.removeEventListener("change", isDesktop);
    };
  }, []);

  //when user logo clicked, opens dropdown
  function handleUserBtn() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <header>
      <Link onClick={handleNavLink} to={"/"}>
        <img className="logo" src="/images/velo1.svg" alt="bicycle logo" />
      </Link>

      <nav className={isOpen ? "show-menu" : "hide-menu"}>
        <ul>
          <li>
            <NavLink onClick={handleNavLink} to={"bikes"}>
              {t("nav.bikes")}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavLink} to={"service"}>
              {t("nav.service")}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavLink} to={"about"}>
              {t("nav.about")}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavLink} to={"contact"}>
              {t("nav.contact")}
            </NavLink>
          </li>
          <li className="lang-switcher">
            {i18n.language.startsWith("fr") && (
              <button onClick={() => changeLanguage("en")} className="lang-btn">
                EN
              </button>
            )}

            {i18n.language.startsWith("en") && (
              <button onClick={() => changeLanguage("fr")} className="lang-btn">
                FR
              </button>
            )}
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                onClick={handleNavLink}
                to="auth/login"
                className="auth-btn"
              >
                Sign In
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <div className="user-menu">
                <button onClick={handleUserBtn} className="user-btn">
                  <span className="user-avatar">L</span>

                  <div className="user-info">
                    <span className="user-greeting">Welcome back</span>
                    <span className="user-name">Liene</span>
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="dropdown">
                    <NavLink onClick={handleNavLink} to="/profile">
                      Profile
                    </NavLink>

                    <NavLink onClick={handleNavLink} to="/bookings">
                      My Bookings
                    </NavLink>

                    <NavLink onClick={handleNavLink} to="/admin/bikes">
                      Admin Panel
                    </NavLink>

                    <button onClick={handleNavLink} className="logout-btn">
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-btn">
        {isOpen ? (
          <button
            onClick={handleHamburgerMenu}
            className="menu hamburger-menu-close"
          >
            <img src="/images/menu-close.svg" alt="hamburger menu close" />
          </button>
        ) : (
          <button
            onClick={handleHamburgerMenu}
            className="menu hamburger-menu-open"
          >
            <img src="/images/menu-open.svg" alt="hamburger menu open" />
          </button>
        )}
      </div>
    </header>
  );
}
