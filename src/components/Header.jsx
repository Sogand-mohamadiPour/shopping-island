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
        <img
          src="/logo.webp"
          className={styles.logo}
          alt="Shopping Island"
        />

        <span className={styles.brandName}>Shopping Island</span>
      </Link>

      <nav className={styles.desktopNav}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">FAQ</Link>
        <Link to="/contactus">Contact Us</Link>
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

          <span className={styles.countBasket}>
            {state.countAll}
          </span>
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

          <span className={styles.countBasket}>
            {state.countAll}
          </span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
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
          Home
        </Link>

        <Link to="/products" onClick={closeMenu}>
          Products
        </Link>

        <Link to="/about" onClick={closeMenu}>
          FAQ
        </Link>

        <Link to="/contactus" onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;