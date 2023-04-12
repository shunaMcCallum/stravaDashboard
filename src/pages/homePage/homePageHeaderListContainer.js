import React from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import BarChart2 from "../../components/charts/barChart/barChart2.js";
//import '../../Styling/HomePageHeaderListContainer.css';

const HomePageHeaderListContainer = ({title, list, thisWeekActivities, lastWeekActivities}) => {

    //console.log(thisWeekActivities)

    const placeholderList = ["Stat1: Stat", "Stat2: Stat", "Stat3: Stat"]
    const placeholderHeader = "Stat Header"

    let thisWeekNum = 0;
    let thisWeekDistance = 0;
    let thisWeekTime = 0;

    let lastWeekNum = 0;
    let lastWeekDistance = 0;
    let lastWeekTime = 0;

    const thisWeek = []
    const lastWeek = [];

    const setThisWeek = () => {
      for (var day of thisWeekActivities) {
        thisWeek.push({
          x: day.DayOfTheWeek,
          y: day.NumActivities
        })

        thisWeekNum += day.NumActivities
        thisWeekDistance += day.Distance
        thisWeekTime += day.MovingTime
      }
      const totalMinutes = Math.floor(thisWeekTime / 60);
      const seconds = thisWeekTime % 60;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      
      thisWeekTime = `${hours}hrs ${minutes}mins ${seconds}secs`
      thisWeekDistance = (thisWeekDistance * 1.60934).toFixed(2)
    };

    const setLastWeek = () => {
      for (var day of lastWeekActivities) {
        lastWeek.push({
          x: day.DayOfTheWeek,
          y: day.NumActivities
        })

        lastWeekNum += day.NumActivities
        lastWeekDistance += day.Distance
        lastWeekTime += day.MovingTime
      }
      const totalMinutes = Math.floor(lastWeekTime / 60);
      const seconds = lastWeekTime % 60;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      
      lastWeekTime = `${hours}hrs ${minutes}mins ${seconds}secs`
      lastWeekDistance = (lastWeekDistance * 1.60934).toFixed(2)
    };

    setThisWeek();
    setLastWeek();

    const thisWeekList = [`No. of Activities: ${thisWeekNum}`, `Distance Travelled: ${thisWeekDistance}km`, `Time Spent: ${thisWeekTime}`]
    const lastWeekList = [`No. of Activities: ${lastWeekNum}`, `Distance Travelled: ${lastWeekDistance}km`, `Time Spent: ${lastWeekTime}`]
    

    return(
      <Box
      sx={{
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gridTemplateRows:"auto",
        gridTemplateAreas:`"overall thisWeek lastWeek"
        "overall thisGraph lastGraph"`,
        gap:"0.9rem",
        justifyContent:"center",
        m:"1.5rem auto 0 auto",
        width:"98%"
      }}
        
      >
        <Box sx={{ gridArea: 'overall' }}>
          <StatsList list={list} listTitle={title}/>
        </Box>
        <Box sx={{ gridArea: 'thisWeek' }}>
          <StatsList list={thisWeekList} listTitle={"This Week Stats"}/>
        </Box>
        <Box sx={{ gridArea: 'lastWeek' }}>
          <StatsList list={lastWeekList} listTitle={"Last Week Stats"}/>
        </Box>
        <Box sx={{ gridArea: 'thisGraph' }}>
          <BarChart2 header={"This Week Activities"} data={thisWeek} chartWidth={1000} />
        </Box>
        <Box sx={{ gridArea: 'lastGraph' }}>
          <BarChart2 header={"Last Week Activities"} data={lastWeek} chartWidth={1000} />
        </Box>
      </Box>

    );

}

export default HomePageHeaderListContainer;