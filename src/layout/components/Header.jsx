import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authUserAtom, isConnectedAtom } from "../../atoms/login.atom.js";
import { useAtom, useAtomValue } from "jotai";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useAtom(authUserAtom);

  const { t, i18n } = useTranslation();

  //I am not setting state here since header and login form is not direct parent/children
  //Using Jotai to set values globally, accessible to any component which needs it
  //Without prop drilling
  //only using (reading value)
  //this comes from derived value from authUserAtom in login.atom.js
  const isLoggedIn = useAtomValue(isConnectedAtom);

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

  //Logs out
  function handleLogout() {
    handleNavLink();
    //since isLoggedIn(isConnectedAtom) is derived value from authUserAtom
    //I am not setting isLoggedIn(isConnectedAtom) directly to false
    //but rather setUserDetails(authUserAtom) to null since it will put isLoggedIn(isConnectedAtom) to false
    setUserDetails(null);
  }

  return (
    <header>
      <Link onClick={handleNavLink} to={"/"}>
        <img className="logo" src="/images/logo.png" alt="bicycle logo" />
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
                  <span className="user-avatar">
                    {userDetails.name.charAt(0)}
                  </span>

                  <div className="user-info">
                    <span className="user-greeting">Welcome back</span>
                    <span className="user-name">{userDetails.name}</span>
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

                    <button onClick={handleLogout} className="logout-btn">
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
