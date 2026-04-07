import { Header } from "./components/Header";

export function MainLayout() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Main layout</h1>
      </main>
      <footer>footer</footer>
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
