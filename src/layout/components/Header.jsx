import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  // takes the language string from onClick and change language
  function changeLanguage(langCode) {
    i18n.changeLanguage(langCode);
  }

  console.log(i18n.language);

  function handleHamburgerMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleNavLink() {
    setIsOpen(false);
  }

  //watches if screen is desktop or mobile
  //otherwise if on small screen menu is open and then it's resized, after resizing to small, menu is already open
  //here I am forcing the isOpen state to false when screen is big
  useEffect(() => {
    //defining when my nav is visible in the full not like hamburger
    const mediaWatcher = window.matchMedia("(min-width: 665px)");
    if (mediaWatcher.matches) {
      setIsOpen(false);
    }

    function isDesktop(e) {
      if (e.matches) {
        setIsOpen(false);
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
            {i18n.language === "fr" && (
              <button onClick={() => changeLanguage("en")} className="lang-btn">
                EN
              </button>
            )}

            {i18n.language === "en" && (
              <button onClick={() => changeLanguage("fr")} className="lang-btn">
                FR
              </button>
            )}
          </li>
          <li>
            <NavLink
              onClick={handleNavLink}
              to="auth/login"
              className="auth-btn"
            >
              Sign In
            </NavLink>
          </li>
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
