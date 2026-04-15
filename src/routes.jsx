import { MainLayout } from "./layout/MainLayout";
import { BikeDetail } from "./pages/bikes/BikeDetail";
import { BikeOverview } from "./pages/bikes/BikeOverview";
import { BikePhotos } from "./pages/bikes/BikePhotos";
import { BikeReviews } from "./pages/bikes/BikeReviews";
import { Bikes } from "./pages/bikes/Bikes";
import { BikeSpecs } from "./pages/bikes/BikeSpecs";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Service } from "./pages/Service";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "bikes", element: <Bikes /> },
      {
        path: "bikes/:id",
        element: <BikeDetail />,
        children: [
          { index: true, element: <BikeOverview /> },
          { path: "specs", element: <BikeSpecs /> },
          { path: "photos", element: <BikePhotos /> },
          { path: "reviews", element: <BikeReviews /> },
        ],
      },
      { path: "service", element: <Service /> },
      { path: "contact", element: <Contact /> },

      { path: "*", element: <NotFound /> },
    ],
  },
];
