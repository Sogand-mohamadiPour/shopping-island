import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
=
        <div className={styles.footerBrand}>
          <div className={styles.brand}>
            <span>S</span>
            <strong>Shoppini Center</strong>
          </div>

          <p>
            Everything you need, all in one place. Discover quality products
            at great prices.
          </p>

          <div className={styles.socials}>
            <a href="Facebook.com" aria-label="Facebook">
              f
            </a>

            <a href="Instagram.com" aria-label="Instagram">
              ig
            </a>

            <a href="x.com" aria-label="Twitter">
              𝕏
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>Shop</h3>
          <Link to="/products">All Products</Link>
          <Link to="/products">New Arrivals</Link>
          <Link to="/products">Best Sellers</Link>
          <Link to="/products">Special Offers</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Help</h3>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/about">FAQ</Link>
          <Link to="/shipping">Shipping & Delivery</Link>
          <Link to="/returns">Returns & Refunds</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className={styles.footerNewsletter}>
          <h3>Stay in the loop</h3>
          <p>
            Subscribe to our newsletter and get updates about new products
            and special offers.
          </p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your email address"
            />
            <button type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>
          © 2026 Shoppini Center. All rights reserved.
        </span>

        <div>
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
