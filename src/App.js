import React, {useState, useEffect} from "react";
import './App.css';
import HomeContainer from './Containers/HomeContainer.js'

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [returnData, setReturnData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/api')
        .then(res => res.json())
        // .then(data => [console.log(data.recordset[0])]);
        .then(data => setUserDetails(data.recordset[0]));
  }, [])






  return (
    <div className="App">
      <h1>Strava Dashboard</h1>
        <HomeContainer userDetails={userDetails}/>
    </div>
  );
}

export default App;
