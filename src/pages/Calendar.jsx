import { useState } from "react";
import styles from "./Calendar.module.css";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

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
  const startOfMonth = new Date(year, month, 1).getDay();

  //calculation without leap year
  //takes current year and month (2026 3) and add one month (4 - May)
  //0 -> go day back which will be a number of the last day of the prev month (30th of April)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //Builds the days of the weeks in UI -> MON, TUE etc.
  const daysOfTheWeekEl = daysOfTheWeek.map((day) => {
    return <span key={day}>{day}</span>;
  });

  //Creates an array from daysInMonth since it returns one number not an array
  function createArray(days) {
    return new Array(days).fill(0).map((_, i) => i + 1);
  }

  //Builds the dates of the weeks in UI -> 1, 2, 3 etc.
  const daysEl = createArray(daysInMonth).map((day) => {
    return (
      <button key={day} className={styles.day}>
        {day}
      </button>
    );
  });

  //-1 since my calendar starts from Monday(0) but startOfMonth starts with Sunday(0)
  const emptySlotsEl = createArray(startOfMonth - 1).map((slot, i) => {
    return <div key={i}></div>;
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
            <button type="button" className={styles.navBtn}>
              ←
            </button>

            <h2>
              {monthEl} {year}
            </h2>

            <button type="button" className={styles.navBtn}>
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
            <button type="button" className={styles.timeBtn}>
              10:00
            </button>
            <button type="button" className={styles.timeBtn}>
              11:00
            </button>
            <button type="button" className={styles.timeBtn}>
              12:00
            </button>
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
