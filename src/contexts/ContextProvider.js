import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState([]);
    const [userStats, setUserStats] = useState([]);
    const [activities, setActivities] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/user')
        .then(res => res.json())
         .then(data => setUserDetails(data.recordset[0]));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/userStats')
          .then(res => res.json())
          .then(data => {setUserStats(data.recordsets[0])
        });
      }, []);

    useEffect(() => {
    fetch('http://localhost:5000/activities')
      .then(res => res.json())
      .then(data => setActivities(data.recordset));
      }, [])

    return (
        <StateContext.Provider
          value={{ userDetails: userDetails, userStats: userStats, initialStats: userStats[0], activities: activities 
          }}
        >
          {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);