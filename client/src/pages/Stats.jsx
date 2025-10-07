import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from "recharts";
import "./Stats.css";

const lineData = [
  { name: "Mon", habitsCompleted: 3 },
  { name: "Tue", habitsCompleted: 5 },
  { name: "Wed", habitsCompleted: 4 },
  { name: "Thu", habitsCompleted: 6 },
  { name: "Fri", habitsCompleted: 2 },
  { name: "Sat", habitsCompleted: 7 },
  { name: "Sun", habitsCompleted: 5 },
];

const barData = [
  { category: "Exercise", count: 10 },
  { category: "Water", count: 12 },
  { category: "Reading", count: 8 },
  { category: "Meditation", count: 5 },
];

const Stats = () => {
  return (
    <div className="stats-container">
      <h2>Your Habit Stats</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h3>Total Habits</h3>
          <p>10</p>
        </div>
        <div className="card">
          <h3>Total Streak</h3>
          <p>23 days</p>
        </div>
        <div className="card">
          <h3>Longest Streak</h3>
          <p>7 days</p>
        </div>
      </div>

      {/* Line Chart */}
      <div className="chart-wrapper">
        <h4>Habits Completed This Week</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="habitsCompleted" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="chart-wrapper">
        <h4>Habits by Category</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
