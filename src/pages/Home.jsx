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
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            تمام چیزی که لازم دارید
            <span>همه در یک مکان</span>
          </h2>

          <p>محصولاتی با کیفیت، پرداخت اقساط با اسنپ، ارسال سریع</p>

          <div className={styles.heroButtons}>
            <Link to="/products" className={styles.primaryButton}>
              خرید محصول
              <FaArrowRight />
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              درباره ما
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.circle}></div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardIcon}>S</div>

            <div>
              <span>Shopping Island</span>
              <div>محصولاتی که به دنبالش هستید</div>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <FaStar />
            <span>لباس های با کیفیت</span>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sectionHeading}>
          <div>
            <span>نگاهی به فروشگاه</span>
            <h2>دسته بندی ها</h2>
          </div>

          <Link to="/products">
            دیدن محصولات
            <FaArrowRight />
          </Link>
        </div>

        <div className={styles.categoryGrid}>
          <Link to="/products" className={styles.categoryCard}>
            <span>01</span>
            <h3>مردانه</h3>
            <p>برای تمامی فصل ها</p>
            <FaArrowRight />
          </Link>

          <Link to="/products" className={styles.categoryCard}>
            <span>02</span>
            <h3>زنانه</h3>
            <p>تنوع بی نظیر</p>
            <FaArrowRight />
          </Link>

          <Link to="/products" className={styles.categoryCard}>
            <span>03</span>
            <h3>جواهرات</h3>
            <p>جزئیاتی بی بدیل</p>
            <FaArrowRight />
          </Link>

          <Link to="/products" className={styles.categoryCard}>
            <span>04</span>
            <h3>لوازم الکترونیک</h3>
            <p>زندگی به روز</p>
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureHeading}>
          <span>چرا جزیره ما؟</span>
          <h2>خرید باید آسان و دلپذیر باشد</h2>

          <p>ما تمام مراحل خرید را برای شما آسان ساختیم.</p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaShippingFast />
            </div>

            <h3>ارسال سریع</h3>

            <p>
              محصولات با بسته بندی مناسب در سریع ترین زمان به دستتان خواهد رسید
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaShieldAlt />
            </div>

            <h3>خرید امن</h3>

            <p>اطلاعات و پرداخت شما در محیطی امن نزد ما خواهد ماند</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaHeadset />
            </div>

            <h3>پشتیبان</h3>

            <p>در تمام مراحل خرید، تیم پشتیبان همراه شماست</p>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeading}>
          <div>
            <h2>تازه ترین ها</h2>
          </div>

          <Link to="/products">
            دیدن همه
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
          <span>آماده خرید هستید؟</span>
          <h5>دیدن تازه ترین محصولات</h5>
          <p>از کالکشن جدید ما دیدن فرمایید</p>
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
