import { Link, useLocation } from "react-router-dom";
import styles from "./BookingConfirmation.module.css";

export function BookingConfirmation() {
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
  const location = useLocation();
  const bookingMonth = location.state.bookingDate?.getMonth();
  const bookingDate = location.state.bookingDate?.getDate();
  const bookingYear = location.state.bookingDate?.getFullYear();
  const bookingTime = location.state.bookedTime;

  //Formatting date to pass the correct format to payload
  //My backend expects 2026-05-05
  const date = new Date(bookingYear, bookingMonth, bookingDate);

  const formattedMonth =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  const formattedDate =
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const formattedFullDate = `${date.getFullYear()}-${formattedMonth}-${formattedDate}`;

  console.log(bookingTime);

  //formData can be called as I want
  //formData collects all the input, select, textarea data
  //inputs needs to have a name attribute
  //doesn't include anything outside the form
  //and doesn't include disabled inputs
  function handleFormSubmit(formData) {
    //formData.entries() gives all the key–value pairs from the form
    //Object.fromEntries(...) converts those pairs into a regular JavaScript object
    const data = Object.fromEntries(formData.entries());

    //my payload is JavaScript object not JSON
    //I can convert manually but since I am using Axios, it will be done for me
    //JSON is string {"bookingDate": "2026-05-05"}
    const payload = {
      bookingDate: formattedFullDate,
      bookingTime: bookingTime,
      serviceType: data.service,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    console.log(payload);
  }

  return (
    <main className={styles.confirmationPage}>
      <section className={styles.confirmationHero}>
        <h1>Booking Confirmation</h1>
        <p>Please fill in the missing information to finalise your booking.</p>
      </section>

      <section className={styles.confirmationContent}>
        <aside className={styles.bookingSummary}>
          <h2>Your selected slot</h2>

          <div className={styles.summaryItem}>
            <span>Date</span>
            <p>
              {months[bookingMonth]} {bookingDate}, {bookingYear}
            </p>
          </div>

          <div className={styles.summaryItem}>
            <span>Time</span>
            <p>{bookingTime}</p>
          </div>

          <Link to="/service/booking" className={styles.changeBtn}>
            Change Date & Time
          </Link>
        </aside>
        <form action={handleFormSubmit} className={styles.confirmationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johnDoe@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+32 470 00 00 00"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">Service Type *</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                --Please choose a service type--
              </option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Provide more details about your bike or issue..."
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Confirm Booking
          </button>
        </form>
      </section>
    </main>
  );
}
