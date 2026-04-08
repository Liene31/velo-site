import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function MainLayout() {
  return (
    <div className="container">
      <Header />
      <main className="hero">
        <h1 className="hero-title">
          Ride Into <span>The Future</span>
        </h1>
      </main>
      <Footer />
    </div>
  );
}

{
  /* <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> */
}
