import { useState } from "react";
import styles from "./Calendar.module.css";

export function Calendar() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  const testDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  //Builds the days of the weeks in UI -> MON, TUE etc.
  const daysOfTheWeekEl = daysOfTheWeek.map((day) => {
    return <span key={day}>{day}</span>;
  });

  //Builds the dates of the weeks in UI -> 1, 2, 3 etc.
  const daysEl = testDays.map((day) => {
    return (
      <button key={day} className={styles.day}>
        {day}
      </button>
    );
  });

  //Month in useState is number starting from 0
  //Looping trough the months array to get the current month
  const monthEl = months[month];

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

          <div className={styles.grid}>{daysEl}</div>
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
