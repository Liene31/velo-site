import { Login } from "./features/auth/pages/Login";
import { Register } from "./features/auth/pages/Register";
import { MainLayout } from "./layout/MainLayout";
import { AdminBikes } from "./pages/bikes/AdminBikes";
import { BikeDetail } from "./pages/bikes/BikeDetail";
import { BikeOverview } from "./pages/bikes/BikeOverview";
import { BikePhotos } from "./pages/bikes/BikePhotos";
import { BikeReviews } from "./pages/bikes/BikeReviews";
import { Bikes } from "./pages/bikes/Bikes";
import { BikeSpecs } from "./pages/bikes/BikeSpecs";
import { Booking } from "./pages/Booking";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Service } from "./pages/Service";
import { SuccessPage } from "./pages/SuccessPage";

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
      {
        path: "service",
        children: [
          { index: true, element: <Service /> },
          {
            path: "booking",
            element: (
              // <ProtectedPage>
              <Booking />
              // </ProtectedPage>
            ),
          },
          {
            path: "booking/confirmation",
            element: (
              // <ProtectedPage>
              <BookingConfirmation />
              // </ProtectedPage>
            ),
          },
          {
            path: "booking/confirmation/success",
            element: (
              // <ProtectedPage>
              <SuccessPage />
              // </ProtectedPage>
            ),
          },
        ],
      },
      { path: "contact", element: <Contact /> },
      {
        path: "auth",
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },

      {
        path: "admin/bikes",
        element: (
          // <ProtectedPage>
          <AdminBikes />
          // </ProtectedPage>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
