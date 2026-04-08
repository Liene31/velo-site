import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="hero">
      <h1 className="hero-title">
        Ride Into <span>The Future</span>
      </h1>
      <Link className="hero-cta">Explore our Bikes</Link>
    </main>
  );
}
