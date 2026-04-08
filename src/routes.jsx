import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
