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
    const persianCategory = e.target.innerText.trim();

    const category = categoryNames[persianCategory];

    setSearchFilter({
      ...searchFilter,
      category,
    });
  };

  useEffect(() => {
    setSearchParams(searchFilter);

    let filteredProducts = searchData(data.products, searchFilter.search);

    filteredProducts = categoryData(filteredProducts, searchFilter.category);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowProducts(filteredProducts);
  }, [data.products, searchFilter, setSearchParams]);

  const categoryNames = {
    همه: "",
    "لباس مردانه": "men's clothing",
    الکترونیکی: "electronics",
    "لباس زنانه": "women's clothing",
    جواهرات: "jewelery",
  };

  return (
    <>
      {/* ================= SEARCH & FILTER ================= */}

      <div className={styles.productControls}>
        <div className={styles.searchBox}>
          <CiSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="محصول مورد نظر خود را جستجو کنید"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />

          <button onClick={searchHandler}>جستجو</button>
        </div>

        <ul className={styles.category} onClick={categoryHandler}>
          <li>همه</li>
          <li>لباس مردانه</li>
          <li>الکترونیکی</li>
          <li>لباس زنانه</li>
          <li>جواهرات</li>
        </ul>
      </div>

      <div className={styles.content}>
        {data.error404 && (
          <p className={styles.error}>
            متاسفانه خطایی رخ داده، مجددا تلاش کنید
          </p>
        )}

        {data.products.length === 0 && !data.error404 && (
          <div className={styles.loading}>
            <Loading />
          </div>
        )}

        {showProducts.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default PageProducts;
