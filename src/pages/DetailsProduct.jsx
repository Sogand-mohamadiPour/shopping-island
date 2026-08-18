import { Link, useParams } from "react-router";
import {
  FaArrowLeft,
  FaShoppingBasket,
  FaStar,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { useProducts } from "../context/ProductContext";
import { useBasket } from "../context/basket/useBasket";

import Loading from "../components/Loading";

import styles from "../css/DetailsProduct.module.css";

function DetailsProduct() {
  const { id } = useParams();

  const data = useProducts();
  const [state, dispatch] = useBasket();

  const product = data.products.find((item) => item.id.toString() === id);

  if (data.products.length === 0 && !data.error404) {
    return (
      <main className={styles.loading}>
        <Loading />
      </main>
    );
  }

  if (data.error404) {
    return (
      <main className={styles.errorPage}>
        <h1>خطایی رخ دادخ. لطفا دوباره تلاش کنید</h1>
        <p>خطا در نمایش اطلاعات محصول</p>

        <Link to="/products">دیدن محصولات</Link>
      </main>
    );
  }

  if (!product) {
    return (
      <main className={styles.errorPage}>
        <span>404</span>
        <h1>محصول پیدا نشد</h1>
        <p>در نمایش اطلاعات محصول مورد نظر خطایی رخ داده. لطفا دوباره محصول خود را انتخاب کنید</p>
        <Link to="/products">
          <FaArrowLeft />
          دیدن محصولات
        </Link>
      </main>
    );
  }

  const basketItem = state.listBasket.find((item) => item.id === product.id);

  const quantity = basketItem?.countT || 0;

  const addToBasket = () => {
    dispatch({
      type: "add",
      payload: product,
    });
  };

  const increase = () => {
    dispatch({
      type: "plus",
      payload: product,
    });
  };

  const decrease = () => {
    dispatch({
      type: "minus",
      payload: product,
    });
  };

  return (
    <main className={styles.page}>
      <Link to="/products" className={styles.back}>
        <FaArrowLeft />
        دیدن محصولات
      </Link>

      <section className={styles.product}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        <div className={styles.info}>
          <span className={styles.category}>{product.category}</span>
          <h1>{product.title}</h1>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>

            <span>{product.rating?.rate || "4.5"}</span>
            <small>({product.rating?.count || 0} نظر)</small>
          </div>

          <div className={styles.price}>
            ${Number(product.price).toFixed(2)}
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.purchase}>
            {quantity === 0 ? (
              <button className={styles.addButton} onClick={addToBasket}>
                <FaShoppingBasket />
                افزودن به سبد خرید
              </button>
            ) : (
              <div className={styles.quantity}>
                <button onClick={decrease}>
                  <FaMinus />
                </button>

                <span>{quantity}</span>

                <button onClick={increase}>
                  <FaPlus />
                </button>
              </div>
            )}
          </div>

          <div className={styles.details}>
            <div>
              <span>دسته بندی</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>شماره محصول</span>
              <strong>#{product.id}</strong>
            </div>

            <div>
              <span>وضعیت انبار</span>
              <strong className={styles.available}>موجود</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomInfo}>
        <div>
          <h3>ارسال سریع</h3>

          <p>تحویل سفارش در سریع ترین زمان ممکن درب منزل شما</p>
        </div>

        <div>
          <h3>بسته بندی مناسب</h3>

          <p>بسته بندی متاسب با محصول جهت جلوگیری از آسیب به بسته</p>
        </div>

        <div>
          <h3>مرجوعی منصفانه</h3>

          <p>در صورتی که محصول در شرایط ارسال شده باشد امکان تعویض به هر دلیلی وجود دارد.</p>
        </div>
      </section>
    </main>
  );
}

export default DetailsProduct;
