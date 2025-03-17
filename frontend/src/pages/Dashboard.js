import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const [cgpa, setCgpa] = useState("");
  const [targetCgpa, setTargetCgpa] = useState("");
  const [studyHours, setStudyHours] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/timetable");
  };

  return (
    <div className="dashboard-container">
      <h2>Enter Your Study Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Current CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Target CGPA"
          value={targetCgpa}
          onChange={(e) => setTargetCgpa(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Study Hours per Day"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
          required
        />
        <button type="submit">Generate Study Plan</button>
      </form>
    </div>
  );
}

export default Dashboard;
