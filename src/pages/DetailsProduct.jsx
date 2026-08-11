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
        <h1>Something went wrong.</h1>
        <p>We couldn't load the product information.</p>

        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  if (!product) {
    return (
      <main className={styles.errorPage}>
        <span>404</span>
        <h1>Product not found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products">
          <FaArrowLeft />
          Back to Products
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
        Back to Products
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
            <small>({product.rating?.count || 0} reviews)</small>
          </div>

          <div className={styles.price}>
            ${Number(product.price).toFixed(2)}
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.purchase}>
            {quantity === 0 ? (
              <button className={styles.addButton} onClick={addToBasket}>
                <FaShoppingBasket />
                Add to Basket
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
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>Product ID</span>
              <strong>#{product.id}</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong className={styles.available}>In Stock</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomInfo}>
        <div>
          <h3>Fast Delivery</h3>

          <p>Get your order delivered quickly and safely to your door.</p>
        </div>

        <div>
          <h3>Secure Shopping</h3>

          <p>Your shopping experience is designed with security in mind.</p>
        </div>

        <div>
          <h3>Easy Returns</h3>

          <p>Not satisfied? Check our return policy for easy returns.</p>
        </div>
      </section>
    </main>
  );
}

export default DetailsProduct;
