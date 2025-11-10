import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../types";
import styles from "./ProductList.module.css";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.productList}>
      <ul className={styles.productGrid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
