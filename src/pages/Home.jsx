import { Link } from "react-router";
import {
  FaArrowRight,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

import { useProducts } from "../context/ProductContext";

import styles from "../css/Home.module.css";

function Home() {
  const data = useProducts();
  const data_products = {};

  data.products.forEach((product) => {
    if (!data_products[product.category]) {
      data_products[product.category] = product;
    }
  });

  const categoryNames = {
    "men's clothing": "مردانه",
    "women's clothing": "زنانه",
    jewelery: "جواهرات",
    electronics: "لوازم الکترونیک",
  };

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
            <img
              src={data_products["men's clothing"]?.image}
              alt="مردانه"
              className={styles.catImage}
            />
            <div className={styles.categoryOverlay}>
              <span>01</span>
              <h3>
                {categoryNames[data_products["men's clothing"]?.category]}
              </h3>
              <p>برای تمامی فصل ها</p>
              <FaArrowRight />
            </div>
          </Link>

          <Link to="/products" className={styles.categoryCard}>
            <img
              src={data_products["women's clothing"]?.image}
              alt="زنانه"
              className={styles.catImage}
            />
            <div className={styles.categoryOverlay}>
              <span>02</span>
              <h3>
                {categoryNames[data_products["women's clothing"]?.category]}
              </h3>
              <p>تنوع بی نظیر</p>
              <FaArrowRight />
            </div>
          </Link>

          <Link to="/products" className={styles.categoryCard}>
            <img
              src={data_products["jewelery"]?.image}
              alt="جواهرات"
              className={styles.catImage}
            />

            <div className={styles.categoryOverlay}>
              <span>03</span>
              <h3>{categoryNames[data_products["jewelery"]?.category]}</h3>
              <p>جزئیاتی بی بدیل</p>
              <FaArrowRight />
            </div>
          </Link>

          <Link to="/products" className={styles.categoryCard}>
            <img
              src={data_products["electronics"]?.image}
              alt="لوازم الکترونیک"
              className={styles.catImage}
            />
            <div className={styles.categoryOverlay}>
              <span>04</span>
              <h3>{categoryNames[data_products["electronics"]?.category]}</h3>
              <p>زندگی به روز</p>
              <FaArrowRight />
            </div>
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

      <section className={styles.cta}>
        <div>
          <span>آماده خرید هستید؟</span>
          <h5>دیدن تازه ترین محصولات</h5>
          <p>از کالکشن جدید ما دیدن فرمایید</p>
        </div>
        <Link to="/products" className={styles.ctaButton}>
          دیدن محصولات
          <FaArrowRight />
        </Link>
      </section>
    </main>
  );
}

export default Home;
