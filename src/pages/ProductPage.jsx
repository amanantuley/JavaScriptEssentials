import plants from "../plants";   // make sure plants.js exists
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice";
import "./ProductPage.css";

export default function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="products container">
      <h2>Our Plants</h2>
      <div className="grid">
        {plants.map(p => (
          <div key={p.id} className="plant-card card">
            <img src={p.image} alt={p.name} width="120" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button
              disabled={isInCart(p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {isInCart(p.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
