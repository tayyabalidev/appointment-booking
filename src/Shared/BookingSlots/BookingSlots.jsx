import React, { useState } from "react";
import "./BookingSlots.css";

const BookingSlots = () => {
  const [selectedDay, setSelectedDay] = useState("MON");
  const [selectedTime, setSelectedTime] = useState(null);

  const days = [
    { name: "MON", date: "25" },
    { name: "TUE", date: "26" },
    { name: "WED", date: "27" },
    { name: "THU", date: "28" },
    { name: "FRI", date: "29" },
    { name: "SAT", date: "30" },
    { name: "SUN", date: "1" },
  ];

  const times = [
    "12:00 pm",
    "12:30 pm",
    "01:00 pm",
    "01:30 pm",
    "02:00 pm",
    "02:30 pm",
    "03:00 pm",
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDay && selectedTime) {
      alert(`Appointment booked for ${selectedDay}, ${selectedTime}`);
    } else {
      alert("Please select a day and time to book an appointment.");
    }
  };

  return (
    <div className="booking-slots">
      <div className="days">
        {days.map((day) => (
          <button
            key={day.name}
            className={`day ${selectedDay === day.name ? "selected" : ""}`}
            onClick={() => handleDayClick(day.name)}
          >
            {day.name} <span>{day.date}</span>
          </button>
        ))}
      </div>
      <div className="times">
        {times.map((time) => (
          <button
            key={time}
            className={`time ${selectedTime === time ? "selected" : ""}`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <button className="book-btn" onClick={handleBooking}>
        Book an appointment
      </button>
    </div>
  );
};

export default BookingSlots;
