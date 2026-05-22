import { useAtom } from "jotai";
import styles from "./UserProfile.module.css";
import { authUserAtom } from "../atoms/token.atom";
import { useEffect, useState } from "react";
import { bookingService } from "../services/booking.service";
import { da } from "@faker-js/faker";

export function UserProfile() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useAtom(authUserAtom);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    bookingService
      .getById(userDetails.userId)
      .then((data) => {
        setBookings(data.bookings);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // server responded (e.g. 500 with "DB error")
          setError(error.response.data.message);
        } else if (error.request) {
          // request made but no response (server down / network issue)
          setError("Server unavailable, please try again later");
        } else {
          // something else went wrong
          setError("Unexpected error, please try again later");
        }
        setIsLoading(false);
      });
  }, []);

  const bookingData = bookings.map((booking) => {
    const date = new Date(booking.bookingDate);
    const bookingMonth = date.getMonth();
    const bookingDate = date.getDate();
    const bookingYear = date.getFullYear();

    return (
      <tr key={booking._id}>
        <td>
          {months[bookingMonth]} {bookingDate}, {bookingYear}
        </td>
        <td>{booking.bookingTime}</td>
        <td>{booking.serviceType}</td>
        <td>{booking.message}</td>
      </tr>
    );
  });

  let bookingElement;

  if (error) {
    bookingElement = <p>{error}</p>;
  } else if (isLoading) {
    bookingElement = <p>Loading</p>;
  } else if (bookings.length === 0) {
    bookingElement = <p>You don’t have any booking history</p>;
  } else {
    bookingElement = bookingData;
  }

  return (
    <main className={styles.profilePage}>
      <section className={styles.userHeader}>
        <span className={styles.userAvatar}>{userDetails.name.charAt(0)}</span>

        <div>
          <h1>{userDetails.name}</h1>
          <p>{userDetails.email}</p>
        </div>
      </section>

      <section className={styles.profileWrapper}>
        <div className={styles.profileCard}>
          <h2>Account Details</h2>

          <div className={styles.userDetails}>
            <span>Name</span>
            <p>{userDetails.name}</p>
          </div>

          <div className={styles.userDetails}>
            <span>Email</span>
            <p>{userDetails.email}</p>
          </div>

          <div className={styles.userDetails}>
            <span>Mobile</span>
            <p>{userDetails.email}</p>
          </div>
        </div>

        <div className={styles.historyCard}>
          <h2>Booking History</h2>
          {error || isLoading || bookings.length === 0 ? (
            bookingElement
          ) : (
            <div className={styles.tableWrapper}>
              <table className={styles.bookingTable}>
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Service</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>

                <tbody>{bookingElement}</tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
