import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../cartSlice";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalCost = cartItems.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="cart container">
      <h2>🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue Shopping</Link></p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item card">
              <img src={item.image} alt={item.name} width="80" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div>
                <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Cost: ₹{totalCost}</h3>
            <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
            <Link to="/products"><button>Continue Shopping</button></Link>
          </div>
        </>
      )}
    </div>
  );
}
