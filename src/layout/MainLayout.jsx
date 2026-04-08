import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
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
