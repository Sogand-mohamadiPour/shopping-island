import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.brand}>
            <strong>Shopping Island</strong>
          </div>
          <p>
            تمام محصولات مورد نیاز شما در یک فروشگاه، مقایسه کنید و خرید کنید.
          </p>
          <div className={styles.socials}>
            <Link to="Telegram.com" aria-label="Telegram">
              T
            </Link>
            <Link to="Instagram.com" aria-label="Instagram">
              IG
            </Link>

            <Link to="x.com" aria-label="Twitter">
              𝕏
            </Link>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>فروشگاه</h3>
          <Link to="/products">همه محصولات</Link>
          <Link to="/products">تازه ترین ها</Link>
          <Link to="/products">پر فروش ترین ها</Link>
          <Link to="/products">پیشنهادات ویژه</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>دسترسی ها</h3>
          <Link to="/contactus">تماس با ما</Link>
          <Link to="/about">درباره ما</Link>
          <Link to="/basket">بسته بندی و ارسال</Link>
          <Link to="/returns">مرجوعی</Link>
        </div>

        <div className={styles.footerNewsletter}>
          <h3>با ما بمانید</h3>
          <p>
            عضو باشگاه مشتریان ما شوید تا از آخرین تخفیف ها و اطلاعیه ها با خبر شوید.
          </p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button type="button">ثبت ایمیل</button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2026 Shoppini Center. تمام حقوق محفوظ است.</span>
        <div>
          <Link to="/privacy">قوانین</Link>
          <Link to="/terms">کوکی ها</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
