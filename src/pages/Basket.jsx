import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";

import { useBasket } from "../context/basket/useBasket";
import styles from "../css/Basket.module.css";

function Basket() {
  const [state, dispatch] = useBasket();

  const deleteHandler = (item) => {
    dispatch({
      type: "delete",
      payload: item,
    });
  };

  const plusHandler = (item) => {
    dispatch({
      type: "plus",
      payload: item,
    });
  };

  const minusHandler = (item) => {
    if (item.countT > 1) {
      dispatch({
        type: "minus",
        payload: item,
      });
    } else {
      dispatch({
        type: "delete",
        payload: item,
      });
    }
  };

  if (state.listBasket.length === 0) {
    return (
      <main className={styles.emptyBasket}>
        <div className={styles.emptyIcon}>🛒</div>
        <h1>سبد خرید شما خالی است</h1>
        <p>محصولی به سبد خود اضافه نکرده اید</p>
        <Link to="/products" className={styles.shopButton}>
          شروع خرید
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.basketPage}>
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.smallTitle}>سبد خرید</span>
          <h1>سبد شما</h1>
          <p>{state.countAll} محصول در سبد شما</p>
        </div>

        <Link to="/products" className={styles.continueShopping}>
          <FaArrowLeft />
          انتخاب محصول بیشتر
        </Link>
      </div>

      <div className={styles.basketContent}>
        <section className={styles.products}>
          {state.listBasket.map((item) => (
            <article className={styles.basketItem} key={item.id}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.productInfo}>
                <h2>{item.title}</h2>
                <span className={styles.price}>${item.price}</span>
                <div className={styles.quantity}>
                  <button onClick={() => minusHandler(item)}>
                    <FaMinus />
                  </button>
                  <span>{item.countT}</span>
                  <button onClick={() => plusHandler(item)}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className={styles.itemRight}>
                <strong>${(item.price * item.countT).toFixed(2)}</strong>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteHandler(item)}
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          ))}
        </section>
        <aside className={styles.summary}>
          <h2>فیش نهایی</h2>

          <div className={styles.summaryRow}>
            <span>تعداد</span>
            <span>{state.countAll}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>قیمت</span>
            <span>${state.total.toFixed(2)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>بسته بندی و ارسال</span>
            <span className={styles.free}>رایگان</span>
          </div>

          <div className={styles.divider}></div>
          <div className={styles.totalRow}>
            <span>جمع کل</span>
            <strong>${state.total.toFixed(2)}</strong>
          </div>
          <button className={styles.checkoutButton}>پرداخت</button>
          <p className={styles.secureText}>
            پرداخت امن · ارسال سریع · مرجوعی منصفانه
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Basket;
