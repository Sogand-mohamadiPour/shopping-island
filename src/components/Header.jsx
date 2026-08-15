import { useState } from "react";
import { Link } from "react-router";
import { FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";
import { useBasket } from "../context/basket/useBasket";
import styles from "../css/Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();
  const [state] = useBasket();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src="/logo.webp" className={styles.logo} alt="Shopping Island" />

        <span className={styles.brandName}>Shopping Island</span>
      </Link>

      <nav className={styles.desktopNav}>
        <Link to="/">صفحه اصلی</Link>
        <Link to="/products">محصولات</Link>
        <Link to="/about">درباره ما</Link>
        <Link to="/contactus">تماس با ما</Link>
      </nav>

      <div className={styles.headerActions}>
        <button
          className={styles.themeButton}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Link to="/basket">
          <FaShoppingBasket className={styles.icons} />
          {state.countAll > 0 && (
            <span className={styles.countBasket}>{state.countAll}</span>
          )}
        </Link>
      </div>

      <div className={styles.mobileControls}>
        <button
          className={styles.themeButton}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Link to="/basket">
          <FaShoppingBasket className={styles.icons} />

          {state.countAll > 0 && (
            <span className={styles.countBasket}>{state.countAll}</span>
          )}
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        className={`${styles.mobileNav} ${
          menuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          صفحه اصلی
        </Link>

        <Link to="/products" onClick={closeMenu}>
          محصولات
        </Link>

        <Link to="/about" onClick={closeMenu}>
          درباره ما
        </Link>

        <Link to="/contactus" onClick={closeMenu}>
          تماس با ما
        </Link>
      </nav>
    </header>
  );
}

export default Header;
