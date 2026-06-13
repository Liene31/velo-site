import { Login } from "./features/auth/pages/Login";
import { Register } from "./features/auth/pages/Register";
import { PageProtected } from "./features/components/PageProtected";
import { MainLayout } from "./layout/MainLayout";
import { About } from "./pages-new/About";
import { AdminBookings } from "./pages/AdminBookings";
import { AdminBikes } from "./pages/bikes/AdminBikes";
import { BikeDetail } from "./pages/bikes/BikeDetail";
import { BikeOverview } from "./pages/bikes/BikeOverview";
import { BikePhotos } from "./pages/bikes/BikePhotos";
import { BikeReviews } from "./pages/bikes/BikeReviews";
import { Bikes } from "./pages/bikes/Bikes";
import { BikeSpecs } from "./pages/bikes/BikeSpecs";
import { Booking } from "./pages/Booking";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { Contact } from "./pages-new/Contact";
import { Home } from "./pages-new/Home";
import { NotFound } from "./pages-new/NotFound";
import { Service } from "./pages/Service";
import { SuccessPage } from "./pages/SuccessPage";
import { UserProfile } from "./pages/UserProfile";

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
            element: <Booking />,
          },
          {
            path: "booking/confirmation",
            element: (
              <PageProtected>
                <BookingConfirmation />
              </PageProtected>
            ),
          },
          {
            path: "booking/confirmation/success",
            element: (
              <PageProtected>
                <SuccessPage />
              </PageProtected>
            ),
          },
        ],
      },
      { path: "about", element: <About /> },
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
          <PageProtected role="admin">
            <AdminBikes />
          </PageProtected>
        ),
      },

      {
        path: "admin/bookings",
        element: (
          <PageProtected role="admin">
            <AdminBookings />
          </PageProtected>
        ),
      },

      {
        path: "profile",
        element: (
          <PageProtected>
            <UserProfile />
          </PageProtected>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
