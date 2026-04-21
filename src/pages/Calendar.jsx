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
  const monthEl = months.map((item, i) => {
    if (i === month) {
      return item;
    }
  });

  return (
    <main className={styles.bookingPage}>
      <h1>Calendar</h1>
      <div className={styles.calendarWrapper}>
        <h2>
          {monthEl} {year}
        </h2>
        <div className={`${styles.daysWrapper} ${styles.grid}`}>
          {daysOfTheWeekEl}
        </div>

        <div className={`${styles.monthWrapper} ${styles.grid}`}>{daysEl}</div>
      </div>
    </main>
  );
}
