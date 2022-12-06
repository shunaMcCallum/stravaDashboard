import React, {useState, useEffect} from "react";
import './App.css';
import HomeContainer from './Containers/HomeContainer.js';
import ActivitiesContainer from './Containers/ActivitiesContainer.js';

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [activities, setActivities] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/user')
        .then(res => res.json())
        // .then(data => [console.log(data.recordset[0])]);
        .then(data => setUserDetails(data.recordset[0]));
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/activities')
      .then(res => res.json())
      // .then(data => [console.log(data.recordset[0])]);
      .then(data => setActivities(data.recordset));
}, [])


  return (
    <div className="App">
      <h1>Strava Dashboard</h1>
        <HomeContainer userDetails={userDetails}/>
        <ActivitiesContainer activities={activities}/>
    </div>
  );
}

export default App;
