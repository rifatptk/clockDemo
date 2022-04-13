import React from "react";
import "./Clock.css";
import { useState, useEffect } from "react";

export default function Clock() {
  const dates = new Date();
  const [second, setSecond] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setSecond(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
  const month = months[dates.getMonth()];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = dates.getHours();
  let minute =
    dates.getMinutes().toString().length < 2
      ? `0${dates.getMinutes()}`
      : dates.getMinutes();
  let seconds =
    dates.getSeconds().toString().length < 2
      ? `0${dates.getSeconds()}`
      : dates.getSeconds();
  let day = days[dates.getDay()];
  let date = dates.getDate();
  let year = dates.getFullYear();
  let ampm = hour < 11 ? "AM" : "PM";
  return (
    <div className="text-white mt-5 row">
      <div className="clock-container p-5 bg-danger col-md-1">
        <h1 className="fw-bold">{hour}</h1>
        <div className=" ">
          <span className="h3">{minute}</span>
          <span className=""> {seconds}</span>
        </div>
      </div>
      <div className="date-container col-md-3 bg-dark p-5">
        <h3>{day}</h3>
        <span className="fw-bold text-danger">{date}th </span>
        <span>{month}</span>
        <h1 className="text-primary fw-bold">{year}</h1>

        <div className="highlights">
          <h4 className="mt-5 text-danger">On this day</h4>
          <div className="highlight p-2">
            <h5 className="highlight-header ">John Doe was borned</h5>
            <p>
              John doe was borned on this day in 19xx. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dolorum ducimus doloremque
              eveniet ipsam quibusdam esse, iste ratione. A, accusamus eveniet?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
