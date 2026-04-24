import { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import { allSlots, openDays } from "./bookingSlots.js";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState([]);

  const daysOfTheWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
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

  const month = currentDate.getMonth();
  const monthEl = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  //add in new Date(2026, 3 (April), 1(1st day of month))
  //and use getDay to get the day of the week when 1st April started (3 - Wednesday)
  //+6 and %7 is to shift that Monday starts with 0, not Sunday
  const startOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;

  //calculation without leap year
  //takes current year and month (2026 3) and add one month (4 - May)
  //0 -> go day back which will be a number of the last day of the prev month (30th of April)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //Builds the days of the weeks in UI -> MON, TUE etc.
  const daysOfTheWeekEl = daysOfTheWeek.map((day) => {
    return <span key={day}>{day}</span>;
  });

  //Creates an array from days since it returns one number not an array
  function createArray(days) {
    return new Array(days).fill(0).map((_, i) => i + 1);
  }

  function handleDaySelect(day) {
    setSelectedDate(new Date(year, month, day));
  }

  //Builds the dates of the weeks in UI -> 1, 2, 3 etc.
  const daysEl = createArray(daysInMonth).map((day) => {
    //not converting to toDateString() since comparing strings work alphabetically not numerically
    const buttonDate = new Date(year, month, day);
    const today = new Date();
    //Normalizing today's to much buttonDate => instead of April 24 at 15:30 it's April 24 at 00:00
    const todayWithoutTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const isClosedDay = !openDays.includes(buttonDate.getDay());
    console.log(isClosedDay);

    return (
      //adding toDateString() since just new Date() will always return false
      <button
        onClick={() => handleDaySelect(day)}
        disabled={buttonDate <= todayWithoutTime || isClosedDay}
        key={day}
        className={`${styles.day} ${isClosedDay && styles.closedDays} ${buttonDate <= todayWithoutTime && styles.dayDisabled} ${
          new Date(year, month, day).toDateString() ===
            selectedDate?.toDateString() && styles.daySelected
        }`}
      >
        {day}
      </button>
    );
  });

  //-1 since my calendar starts from Monday(0) but startOfMonth starts with Sunday(0)
  const emptySlotsEl = createArray(startOfMonth).map((slot) => {
    return <div key={slot}></div>;
  });

  //controls month switch back and forth
  function handleMonthChange(arrow) {
    if (arrow === "right") {
      setCurrentDate(new Date(year, month + 1, 1));
    } else {
      setCurrentDate(new Date(year, month - 1, 1));
    }
  }

  useEffect(() => {
    fetch("/data/bookings.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  //checks if there are already bookings in user's selected date
  const bookingsInSelectedDate = bookings.filter((date) => {
    return (
      new Date(date?.bookingDate).toDateString() ===
      selectedDate?.toDateString()
    );
  });

  //returns only available time in array
  //if i would use filter it would return object not just time
  const bookedTimes = bookingsInSelectedDate.map((booking) => {
    return booking.bookingTime;
  });

  //looping through the all possible times and returning only the ones which where not in the booking as an array
  const availableSlots = allSlots.filter((slot) => {
    return !bookedTimes.includes(slot);
  });

  //display in UI
  const availableTimeSlotEl = availableSlots.map((slot) => {
    return (
      <button key={slot} type="button" className={styles.timeBtn}>
        {slot}
      </button>
    );
  });

  return (
    <main className={styles.bookingPage}>
      <h1 className={styles.pageTitle}>Schedule appointment</h1>
      <p className={styles.pageSubtitle}>
        Choose a day and a time slot for your service appointment.
      </p>

      <div className={styles.bookingLayout}>
        <section className={styles.calendarWrapper}>
          <div className={styles.calendarHeader}>
            <button
              //disables the arrow when in current month since user is not supposed to book in past
              disabled={
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear()
              }
              onClick={() => handleMonthChange("left")}
              type="button"
              className={styles.navBtn}
            >
              ←
            </button>

            <h2>
              {monthEl} {year}
            </h2>

            <button
              onClick={() => handleMonthChange("right")}
              type="button"
              className={styles.navBtn}
            >
              →
            </button>
          </div>

          <div className={`${styles.daysWrapper} ${styles.grid}`}>
            {daysOfTheWeekEl}
          </div>

          <div className={styles.grid}>
            {emptySlotsEl}
            {daysEl}
          </div>
        </section>

        <aside className={styles.timeSection}>
          <h3>Select a time</h3>

          <div className={styles.timeList}>
            {selectedDate ? availableTimeSlotEl : <p>No date selected</p>}
          </div>
        </aside>
      </div>

      <div className={styles.selectionSummary}>
        <p>
          Selected appointment: <span>April 10, 2026 at 10:00</span>
        </p>

        <button type="button" className={styles.confirmBtn}>
          Confirm Booking
        </button>
      </div>
    </main>
  );
}
