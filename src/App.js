import React, { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/navBar";
import HomePage from './pages/homePage/homePage';
import ActivitiesPage from './pages/activitiesPage/activitiesPage';
import ActivityPage from "./pages/activitiesPage/activityPage/activityPage";

function App() {

  const [userDetails, setUserDetails] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [alpeDuZwiftEfforts, setAlpeDuZwiftEfforts] = useState([]);
  const [thisWeekActivities, setThisWeekActivities] = useState([]);
  const [lastWeekActivities, setLastWeekActivities] = useState([]);
  const [thisMonthActivities, setThisMonthActivities] = useState([]);
  const [lastMonthActivities, setLastMonthActivities] = useState([]);

  const initialStats = { ...userStats[0] };
  const activityHeaders = { ...activities[0] };

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
       .then(data => setUserDetails(data.recordset[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/activities')
      .then(res => res.json())
      .then(data => setActivities(data.recordset));
}, [])

  useEffect(() => {
    fetch('http://localhost:5000/userStats')
      .then(res => res.json())
      .then(data => setUserStats(data.recordsets[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/alpeDuZwift')
      .then(res => res.json())
      .then(data => setAlpeDuZwiftEfforts(data.recordsets[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/thisWeekActivities')
      .then(res => res.json())
      .then(data => setThisWeekActivities(data.recordsets[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/lastWeekActivities')
      .then(res => res.json())
      .then(data => setLastWeekActivities(data.recordsets[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/thisMonthActivities')
      .then(res => res.json())
      .then(data => setThisMonthActivities(data.recordsets[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/lastMonthActivities')
      .then(res => res.json())
      .then(data => setLastMonthActivities(data.recordsets[0]));
  }, [])

  return (
    <div className="App">
      <CssBaseline />
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage userDetails={userDetails} userStats={userStats} initialStats={initialStats} 
            activities={activities} alpeDuZwiftEfforts={alpeDuZwiftEfforts} thisWeekActivities={thisWeekActivities} lastWeekActivities={lastWeekActivities} thisMonthActivities={thisMonthActivities} lastMonthActivities={lastMonthActivities} />} />
        <Route path="activities" element={<ActivitiesPage activitiesList={activities} activityHeaders={activityHeaders} />} />
        <Route path="activities/:id" element={<ActivityPage activities={activities} />} />
        </Routes>
    </div>
  );
}

export default App;
