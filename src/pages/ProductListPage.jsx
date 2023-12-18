import { useEffect, useState } from "react";
import styles from "/src/styles/product.module.css";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
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
          <div className={styles.prodContainer} key={prod.id}>
            <img className={styles.prodImg} src={prod.image} alt={prod.name} />
            <span className={styles.prodTitle} style={{ fontWeight: "bolder" }}>
              {prod.title}
            </span>
            <span>{prod.category}</span>
            <span>${prod.price}</span>
            <span className={styles.prodDesc}>
              {prod.description.slice(0, 15)}...
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
