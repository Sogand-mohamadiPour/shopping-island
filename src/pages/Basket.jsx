import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";

import {useBasket} from '../context/basket/useBasket'
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

        <h1>Your basket is empty</h1>

        <p>
          Looks like you haven't added anything to your basket yet.
        </p>

        <Link to="/products" className={styles.shopButton}>
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.basketPage}>

      {/* Header */}

      <div className={styles.pageHeader}>
        <div>
          <span className={styles.smallTitle}>
            YOUR SHOPPING BASKET
          </span>

          <h1>Your Basket</h1>

          <p>
            {state.countAll}{" "}
            {state.countAll === 1 ? "item" : "items"} in your basket
          </p>
        </div>

        <Link
          to="/products"
          className={styles.continueShopping}
        >
          <FaArrowLeft />
          Continue Shopping
        </Link>
      </div>


      {/* Basket content */}

      <div className={styles.basketContent}>

        {/* Products */}

        <section className={styles.products}>

          {state.listBasket.map((item) => (

            <article
              className={styles.basketItem}
              key={item.id}
            >

              {/* Image */}

              <div className={styles.imageContainer}>
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>


              {/* Product information */}

              <div className={styles.productInfo}>

                <h2>
                  {item.title}
                </h2>

                <span className={styles.price}>
                  ${item.price}
                </span>

                <div className={styles.quantity}>

                  <button
                    onClick={() => minusHandler(item)}
                  >
                    <FaMinus />
                  </button>

                  <span>
                    {item.countT}
                  </span>

                  <button
                    onClick={() => plusHandler(item)}
                  >
                    <FaPlus />
                  </button>

                </div>

              </div>


              {/* Item total + delete */}

              <div className={styles.itemRight}>

                <strong>
                  ${(item.price * item.countT).toFixed(2)}
                </strong>

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


        {/* Summary */}

        <aside className={styles.summary}>

          <h2>Order Summary</h2>

          <div className={styles.summaryRow}>
            <span>Items</span>
            <span>{state.countAll}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${state.total.toFixed(2)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span className={styles.free}>
              Free
            </span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <strong>
              ${state.total.toFixed(2)}
            </strong>
          </div>

          <button className={styles.checkoutButton}>
            Proceed to Checkout
          </button>

          <p className={styles.secureText}>
            Secure checkout · Fast delivery · Easy returns
          </p>

        </aside>

      </div>

    </main>
  );
}

export default Basket;