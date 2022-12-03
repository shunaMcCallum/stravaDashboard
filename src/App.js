import React, {useState, useEffect} from "react";
import './App.css';
import HomeContainer from './Containers/HomeContainer.js'
import StravaApi from './Services/StravaApi.js'

function App() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    StravaApi.getUserDetails()
      .then(data => setUserDetails(data));
  },[])

  return (
    <div className="App">
      <h1>Hello Strava!</h1>
      
        <HomeContainer userDetails={userDetails}/>
    </div>
  );
}

export default App;
