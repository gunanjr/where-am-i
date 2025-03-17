import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/timetable.css";

function TimetablePage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="timetable-container">
      <h2>Your Study Timetable</h2>
      <Calendar onChange={setDate} value={date} />
      <h3>Study Tasks for {date.toDateString()}</h3>
      <ul>
        <li>📖 Study 2 hours of Mathematics</li>
        <li>📚 Revise Physics Notes</li>
        <li>✍️ Practice 5 coding problems</li>
      </ul>
    </div>
  );
}

export default TimetablePage;
