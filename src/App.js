import React, {useState, useEffect} from "react";
import './App.css';
import NavBar from "./PageComponents/NavBar";
import HomeContainer from './PageContainers/HomeContainer.js';
// import ActivitiesContainer from './PageContainers/ActivitiesContainer.js';

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [userStats, setUserStats] = useState([]);
  // const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
       .then(data => setUserDetails(data.recordset[0]));
  }, [])

//   useEffect(() => {
//     fetch('http://localhost:5000/activities')
//       .then(res => res.json())
//       // .then(data => (console.log(data.recordset[0])));
//       .then(data => setActivities(data.recordset));
// }, [])

  useEffect(() => {
    fetch('http://localhost:5000/userStats')
      .then(res => res.json())
      .then(data => setUserStats(data.recordsets[0]));
  }, [])


  return (
    <div className="App">
      {/* <h1 id="app-header">Strava Dashboard</h1> */}
        <NavBar />
        <HomeContainer userDetails={userDetails} userStats={userStats}/>
        {/* <ActivitiesContainer activities={activities}/> */}
    </div>
  );
}

export default App;
