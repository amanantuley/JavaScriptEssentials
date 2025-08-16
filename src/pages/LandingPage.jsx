import { Link } from "react-router-dom";
import "./LandingPage.css";  // make sure CSS file exists

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>🌿 Paradise Nursery</h1>
      <p>
        Paradise Nursery brings nature to your home with beautiful houseplants
        that purify the air and spread positivity.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
