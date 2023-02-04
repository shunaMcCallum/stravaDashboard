import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState([]);
    const [userStats, setUserStats] = useState([]);
  
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

    return (
        <StateContext.Provider
          value={{ userDetails: userDetails, userStats: userStats, initialStats: userStats[0] 
          }}
        >
          {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);