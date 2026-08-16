import styles from "../css/Card.module.css";

import { Link } from "react-router";

import { FaShoppingBasket } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

import { useBasket } from "../context/basket/useBasket";
import { tedadFunc } from "../myFunctions";

function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useBasket();
  const basketHandler = (type) => {
    dispatch({ type: type, payload: data });
  };
  const tedad = tedadFunc(state.listBasket, id);

  return (
    <div className={styles.card}>
      <img alt={title} src={image} />
      <p>{title.split(" ").slice(0, 3)}</p>
      <p>قیمت: {price}</p>
      <hr />
      <div className={styles.d_icons}>
        <div className={styles.icon}>
          {tedad == 0 ? (
            <FaShoppingBasket
              className={styles.icons}
              onClick={() => basketHandler("add")}
            />
          ) : (
            <CiCirclePlus
              className={styles.icons}
              onClick={() => basketHandler("plus")}
            />
          )}
          {tedad >= 1 && <span className={styles.tedad}>{tedad}</span>}
          {tedad > 1 && (
            <CiCircleMinus
              className={styles.icons}
              onClick={() => basketHandler("minus")}
            />
          )}

          <MdDelete
            className={styles.icons}
            onClick={() => basketHandler("delete")}
          />
        </div>
        <Link to={`/products/${id}`}>
          <TbListDetails className={styles.icons} />
        </Link>
      </div>
    </div>
  );
}

export default Card;
