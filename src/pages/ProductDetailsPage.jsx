import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "/src/styles/singleProd.module.css";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const prod = await response.json();
      setProduct(prod);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProductDetailsPage">
      <img className={styles.prodImg} src={product.image} alt={product.title} />

      <div className={styles.infosContainer}>
        <span className={styles.prodCategory}>{product.category}</span>
        <span className={styles.prodTitle}>{product.title}</span>
        <span className={styles.prodDesc}>{product.description}</span>
        <span className={styles.prodPrice}>${product.price}</span>

        <Link to="/">
          <button className={styles.backBtn}>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
