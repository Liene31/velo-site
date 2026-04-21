import { useState } from "react";

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
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  console.log(startDay);
  return <h1>Calendar</h1>;
}
