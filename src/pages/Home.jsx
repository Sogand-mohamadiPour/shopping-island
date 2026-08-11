import { Link } from "react-router";
import {
  FaArrowRight,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import Loading from "../components/Loading";

import styles from "../css/Home.module.css";

function Home() {
  const data = useProducts();
  const featuredProducts = data.products.slice(0, 4);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>WELCOME TO SHOPPINI CENTER</span>

          <h1>
            Everything you need.
            <span> All in one place.</span>
          </h1>

          <p>
            Discover quality products, great prices, and everything you need for
            your everyday life.
          </p>

          <div className={styles.heroButtons}>
            <Link to="/products" className={styles.primaryButton}>
              Shop Now
              <FaArrowRight />
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.circle}></div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardIcon}>S</div>

            <div>
              <span>SHOPPINI</span>
              <strong>Everything you love.</strong>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <FaStar />
            <span>Quality products</span>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.sectionHeading}>
          <div>
            <span>EXPLORE OUR STORE</span>
            <h2>Shop by category</h2>
          </div>

          <Link to="/products">
            View all
            <FaArrowRight />
          </Link>
        </div>

        <div className={styles.categoryGrid}>
          <Link
            to="/products"
            className={`${styles.categoryCard} ${styles.clothing}`}
          >
            <span>01</span>
            <h3>Clothing</h3>
            <p>Find your everyday style.</p>
            <FaArrowRight />
          </Link>

          <Link
            to="/products"
            className={`${styles.categoryCard} ${styles.electronics}`}
          >
            <span>02</span>
            <h3>Electronics</h3>
            <p>Technology for your life.</p>
            <FaArrowRight />
          </Link>

          <Link
            to="/products"
            className={`${styles.categoryCard} ${styles.jewelry}`}
          >
            <span>03</span>
            <h3>Jewelry</h3>
            <p>Small details, big impact.</p>
            <FaArrowRight />
          </Link>

          <Link
            to="/products"
            className={`${styles.categoryCard} ${styles.women}`}
          >
            <span>04</span>
            <h3>Women's Fashion</h3>
            <p>Something for every occasion.</p>
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureHeading}>
          <span>WHY SHOPPINI?</span>
          <h2>Shopping should be simple.</h2>

          <p>We make finding and buying the things you need easier.</p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaShippingFast />
            </div>

            <h3>Fast Delivery</h3>

            <p>Get your favorite products delivered quickly and safely.</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaShieldAlt />
            </div>

            <h3>Secure Shopping</h3>

            <p>
              Your information and payments are handled with security in mind.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaHeadset />
            </div>

            <h3>Helpful Support</h3>

            <p>Have a question? Our support team is ready to help.</p>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeading}>
          <div>
            <span>OUR PICKS</span>
            <h2>Featured products</h2>
          </div>

          <Link to="/products">
            Browse all
            <FaArrowRight />
          </Link>
        </div>

        <div className={styles.productGrid}>
          {data.error404 && (
            <p className={styles.error}>Failed to fetch products.</p>
          )}

          {data.products.length === 0 && !data.error404 ? (
            <div className={styles.loading}>
              <Loading />
            </div>
          ) : (
            featuredProducts.map((item) => <Card key={item.id} data={item} />)
          )}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <span>READY TO SHOP?</span>

          <h2>Find something you'll love.</h2>

          <p>Explore our collection and discover your next favorite product.</p>
        </div>

        <Link to="/products" className={styles.ctaButton}>
          Explore Products
          <FaArrowRight />
        </Link>
      </section>
    </main>
  );
}

export default Home;
