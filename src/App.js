import React, {useState, useEffect} from "react";
import './App.css';
import HomeContainer from './Containers/HomeContainer.js'

function App() {
  const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => setUserDetails(data));
  }, [])

  return (
    <div className="App">
      <h1>Hello Strava!</h1>
        <HomeContainer userDetails={userDetails[0]}/>
    </div>
  );
}

export default App;
