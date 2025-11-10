import { useState } from "react";
import useCartStore from "../../store/cart-store";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const cart_total = cart
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);
  const cart_qty = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      {/* Button for opening/closing cart */}
      <button
        className={styles.cartButton}
        onClick={() => setCartOpen(!cartOpen)}
      >
        <span>Cart</span>
        <img
          src="FluentCart20Regular.svg"
          alt="Shopping Cart Icon"
          width="24"
          height="24"
        />
      </button>

      <div className={styles.cartQty}>{cart_qty}</div>

      {/* Cart container when opened */}
      {cartOpen && (
        <div className={styles.cartDetails}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id} className={styles.cartItem}>
                  {/* 1. Item Name */}
                  <td>
                    {item.product.name}{" "}
                    <p>1 qty: ${item.product.price.toFixed(2)}</p>
                  </td>

                  {/* 2. Item Quantity (with buttons) */}
                  <td>
                    <div className={styles.quantityControls}>
                      <button onClick={() => removeFromCart(item.product.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item.product)}>+</button>
                    </div>
                  </td>

                  {/* 3. Total Price for the item */}
                  <td className={styles.itemTotal}>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer section for the grand total and clear button */}
          <div className={styles.cartFooter}>
            <button onClick={clearCart}>Clear Cart</button>
            <p>Total: ${cart_total}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
