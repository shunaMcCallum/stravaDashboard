import React from "react";
import { CssBaseline } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";

import './App.css';
import NavBar from "./components/navBar/navBar";
import HomePage from './pages/homePage/homePage';
import ActivitiesPage from './pages/activitiesPage/activitiesPage';

function App() {

 const {userDetails, userStats, activities} = useStateContext();
 const initialStats = { ...userStats[0] };
 const activityHeaders = { ...activities[0] };

//   const [userDetails, setUserDetails] = useState([]);
//   const [userStats, setUserStats] = useState([]);
//   // const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/user')
//       .then(res => res.json())
//        .then(data => setUserDetails(data.recordset[0]));
//   }, [])

//   useEffect(() => {
//     fetch('http://localhost:5000/activities')
//       .then(res => res.json())
//       // .then(data => (console.log(data.recordset[0])));
//       .then(data => setActivities(data.recordset));
// }, [])

//   useEffect(() => {
//     fetch('http://localhost:5000/userStats')
//       .then(res => res.json())
//       .then(data => setUserStats(data.recordsets[0]));
//   }, [])


  return (
    <div className="App">
      <CssBaseline />
        <NavBar />
        <Routes>
        <Route path="" element={<HomePage userDetails={userDetails} userStats={userStats} initialStats={initialStats} />} />
        <Route path="/activities" element={<ActivitiesPage activitiesList={activities} activityHeaders={activityHeaders} />} />
        </Routes>
    </div>
  );
}

export default App;
