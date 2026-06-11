import { useEffect, useState } from "react";
import styles from "./AdminBookings.module.css";
import { bookingService } from "../services/booking.service";
import { createInstance } from "i18next";

export function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  //fetchBookings is re-usable function
  useEffect(() => {
    fetchBookings();
  }, []);

  function fetchBookings() {
    setIsLoading(true);
    setError(null);
    bookingService
      .getAll()
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
  }

  async function handleStatusChange(id, bookingStatus) {
    let modification = {
      status: null,
    };

    if (bookingStatus === "pending") {
      modification.status = "confirmed";
    } else if (bookingStatus === "confirmed") {
      modification.status = "completed";
    } else {
      modification = {
        status: "cancelled",
      };
    }

    try {
      const updatedStatus = await bookingService.updateStatus(id, modification);
      fetchBookings();
    } catch (err) {
      if (err.response) {
        // server responded (e.g. 500 with "DB error")
        setError(err.response.data.message);
      } else if (err.request) {
        // request made but no response (server down / network issue)
        setError("Server unavailable, please try again later");
      } else {
        // something else went wrong
        setError("Unexpected error, please try again later");
      }
    }
  }

  //this is a function which takes in as a parameter an array (bookings)
  const statusCount = (arr) => {
    //maps over every booking and extracts only the status ["pending", "pending", "completed"] etc
    //new Set() removes duplicates -> becomes ["pending", "completed"]
    const uniqueStatusArray = [...new Set(arr.map(({ status }) => status))];

    //reduce() builds an object, starts with {}
    return uniqueStatusArray.reduce((acc, name) => {
      //for each status name, it filters the original bookings arr and counts how many bookings have that status
      acc[name] = arr.filter(({ status }) => status === name).length;
      return acc;
    }, {});
  };

  const statusEl = statusCount(bookings);
  //filtering on frontend not backend, otherwise my dashboard will reflect filtered values not global
  const selectedBookings = bookings.filter((booking) => {
    return selectedStatus === booking.status;
  });

  //filters only bookings by selected date
  const selectedBookingsByDate = bookings.filter((booking) => {
    return selectedDate === getComparableDate(booking.bookingDate);
  });

  console.log(selectedBookingsByDate);

  let bookingsToDisplay;

  //set condition if all bookings should be displayed or filtered
  if (selectedStatus === "all" && selectedDate === "") {
    bookingsToDisplay = bookings;
  }

  if (selectedStatus !== "all") {
    console.log("status");
    bookingsToDisplay = selectedBookings;
  }

  if (selectedDate !== "") {
    console.log("date");
    bookingsToDisplay = selectedBookingsByDate;
  }

  //helper function to format date for displaying dates in booking list
  function getDisplayDate(dateValue) {
    const date = new Date(dateValue);
    const bookingMonth = date.getMonth();
    const bookingDate = date.getDate();
    const bookingYear = date.getFullYear();
    const formattedDate = `${months[bookingMonth]} ${bookingDate}, ${bookingYear}`;
    return formattedDate;
  }

  //helper function to format date for comparing selectedDate with a date form the booking list
  function getComparableDate(dateValue) {
    const date = new Date(dateValue);
    const formattedDate = date.toISOString().substring(0, 10);
    return formattedDate;
  }

  const bookingData = bookingsToDisplay.map((booking) => {
    console.log(booking);
    const statusClass = {
      pending: styles.pending,
      confirmed: styles.confirmed,
      completed: styles.completed,
      cancelled: styles.cancelled,
      //fallback
      default: styles.pending,
    };

    return (
      <tr key={booking._id}>
        <td>{getDisplayDate(booking.bookingDate)}</td>
        <td>{booking.bookingTime}</td>
        <td>
          <span className={styles.strong}>{booking.name}</span>
          <span>{booking.email}</span>
        </td>
        <td>{booking.serviceType}</td>
        <td>
          <span
            //statusClass is an object not array
            className={`${styles.statusBadge} ${statusClass[booking.status]}`}
          >
            {booking.status}
          </span>
        </td>
        <td>{booking.message}</td>
        <td>
          <div className={styles.actions}>
            {booking.status === "pending" || booking.status === "confirmed" ? (
              <>
                <button
                  onClick={() =>
                    handleStatusChange(booking._id, booking.status)
                  }
                  className={styles.completeBtn}
                >
                  {booking.status === "pending" ? "Confirm" : "Complete"}
                </button>
                <button
                  onClick={() => handleStatusChange(booking._id)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </>
            ) : (
              <p className={styles.noActions}>Booking closed</p>
            )}
          </div>
        </td>
      </tr>
    );
  });

  //detects which of the statuses are selected from dropdown
  function handleStatusChange(event) {
    setSelectedStatus(event.target.value);
  }

  //detects selected date
  function handleDateInput(event) {
    setSelectedDate(event.target.value);
  }

  return (
    <main className={styles.adminPage}>
      <section className={styles.adminHero}>
        <h1>Admin Bookings</h1>
        <p>Manage service appointments and customer requests.</p>
      </section>

      <section className={styles.statsWrapper}>
        <div className={styles.statCard}>
          <span>Total</span>
          {/* total of all bookings give total of the status */}
          <p>{bookings.length}</p>
        </div>

        <div className={styles.statCard}>
          <span>Pending</span>
          <p>{statusEl.pending || 0}</p>
        </div>

        <div className={styles.statCard}>
          <span>Confirmed</span>
          <p>{statusEl.confirmed || 0}</p>
        </div>

        <div className={styles.statCard}>
          <span>Completed</span>
          <p>{statusEl.completed || 0}</p>
        </div>

        <div className={styles.statCard}>
          <span>Cancelled</span>
          <p>{statusEl.cancelled || 0}</p>
        </div>
      </section>

      <section className={styles.statsSelect}>
        <label>
          Status
          <select
            onChange={handleStatusChange}
            name="statsSelect"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>

        <label>
          Date
          <input onChange={handleDateInput} name="date" type="date" />
        </label>
      </section>

      <section className={styles.bookingsCard}>
        <h2>Booking Requests</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.bookingsTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>{bookingData}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
