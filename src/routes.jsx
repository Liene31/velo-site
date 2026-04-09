import { MainLayout } from "./layout/MainLayout";
import { Bikes } from "./pages/bikes/Bikes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "bikes", element: <Bikes /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
