import { useEffect, useState } from "react";
import styles from "/src/styles/product.module.css";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const prodList = await response.json();
      setProducts(prodList);
      console.log(prodList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProductListPage">
      {products?.map((prod) => {
        return (
          <Link
            to={`/product/details/${prod.id}`}
            key={prod.id}
            className={styles.prodContainer}
          >
            <img className={styles.prodImg} src={prod.image} alt={prod.name} />
            <span className={styles.prodTitle} style={{ fontWeight: "bolder" }}>
              {prod.title}
            </span>
            <span>{prod.category}</span>
            <span>${prod.price}</span>
            <span className={styles.prodDesc}>
              {prod.description.slice(0, 15)}...
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
