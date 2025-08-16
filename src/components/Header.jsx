import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header>
      <Link to="/"><h2>Paradise Nursery</h2></Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {totalItems}</Link>
      </nav>
    </header>
  );
}
