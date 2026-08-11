import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import Card from "../components/Card";
import Loading from "../components/Loading";

import { useProducts } from "../context/ProductContext";
import { categoryData, searchData } from "../myFunctions";

import styles from "../css/PageProduct.module.css";

function PageProducts() {
  const data = useProducts();

  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState({});
  const [showProducts, setShowProducts] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const searchHandler = () => {
    setSearchFilter({
      ...searchFilter,
      search,
    });
  };

  const categoryHandler = (e) => {
    let category = e.target.innerText.toLowerCase().trim();

    if (category === "all") {
      category = "";
    }

    setSearchFilter({
      ...searchFilter,
      category,
    });
  };

  useEffect(() => {
    setSearchParams(searchFilter);

    let filteredProducts = searchData(
      data.products,
      searchFilter.search
    );

    filteredProducts = categoryData(
      filteredProducts,
      searchFilter.category
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowProducts(filteredProducts);
  }, [data.products, searchFilter, setSearchParams]);

  return (
    <>
      {/* ================= SEARCH & FILTER ================= */}

      <div className={styles.productControls}>

        <div className={styles.searchBox}>
          <CiSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value.toLowerCase())
            }
          />

          <button onClick={searchHandler}>
            Search
          </button>
        </div>

        <ul
          className={styles.category}
          onClick={categoryHandler}
        >
          <li>all</li>
          <li>men's clothing</li>
          <li>electronics</li>
          <li>women's clothing</li>
          <li>jewelery</li>
        </ul>
      </div>

      <div className={styles.content}>

        {data.error404 && (
          <p className={styles.error}>
            Failed to fetch products.
          </p>
        )}

        {data.products.length === 0 && !data.error404 && (
          <div className={styles.loading}>
            <Loading />
          </div>
        )}

        {showProducts.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))}

      </div>
    </>
  );
}

export default PageProducts;
