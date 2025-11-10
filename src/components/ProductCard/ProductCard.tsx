import type { Product } from "../../types";
import useCartStore from "../../store/cart-store";
import styles from "./ProductCard.module.css";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);

  // event handler to handle adding to cart
  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={styles.productCard}>
      {/* Overlay for sold out products */}
      {product.status !== "Available" && (
        <div className={styles.overlay}>Sold Out</div>
      )}

      <h4>{product.name}</h4>
      <h5 className={styles.group}>{product.group}</h5>
      <img
        src="computer_img.jpg"
        alt="image of acomputer"
        width="200"
        height="200"
      ></img>
      <p className={styles.price}>
        ${product.price} <span className={styles.msrp}>${product.msrp}</span>
      </p>
      <p className={styles.status}>
        {product.status === "Available" ? "In Stock" : "Out of Stock"}
      </p>
      {/* button is disabled if product not available */}
      <button
        onClick={handleAddToCart}
        disabled={product.status !== "Available"}
      >
        {isAdded ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
