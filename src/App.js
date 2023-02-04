import React from "react";
import { CssBaseline } from "@mui/material";
import './App.css';
import NavBar from "./components/navBar/navBar";
import HomePage from './pages/homePage/homePage';
// import ActivitiesContainer from './PageContainers/ActivitiesContainer.js';
import { useStateContext } from "./contexts/ContextProvider";

function App() {

 const {userDetails, userStats} = useStateContext();
 const initialStats = { ...userStats[0] };

//   const [userDetails, setUserDetails] = useState([]);
//   const [userStats, setUserStats] = useState([]);
//   // const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/user')
//       .then(res => res.json())
//        .then(data => setUserDetails(data.recordset[0]));
//   }, [])

// //   useEffect(() => {
// //     fetch('http://localhost:5000/activities')
// //       .then(res => res.json())
// //       // .then(data => (console.log(data.recordset[0])));
// //       .then(data => setActivities(data.recordset));
// // }, [])

//   useEffect(() => {
//     fetch('http://localhost:5000/userStats')
//       .then(res => res.json())
//       .then(data => setUserStats(data.recordsets[0]));
//   }, [])


  return (
    <div className="App">
      <CssBaseline />
        <NavBar />
        <HomePage userDetails={userDetails} userStats={userStats} initialStats={initialStats} />
        {/* <ActivitiesContainer activities={activities}/> */}
    </div>
  );
}

export default App;
