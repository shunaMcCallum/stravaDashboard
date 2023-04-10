import React from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import BarChart2 from "../../components/charts/barChart/barChart2.js";
//import '../../Styling/HomePageHeaderListContainer.css';

const HomePageHeaderListContainer = ({title, list, thisWeekActivities, lastWeekActivities}) => {

    const placeholderList = ["Stat1: Stat", "Stat2: Stat", "Stat3: Stat"]
    const placeholderHeader = "Stat Header"

    let thisWeekNum = 0;
    let lastWeekNum = 0;

    const thisWeek = []
    const lastWeek = [];

    const setThisWeek = () => {
      for (var day of thisWeekActivities) {
        thisWeek.push({
          x: day.DayOfTheWeek,
          y: day.NumActivities
        })

        thisWeekNum += day.NumActivities
      }
    };

    const setLastWeek = () => {
      for (var day of lastWeekActivities) {
        lastWeek.push({
          x: day.DayOfTheWeek,
          y: day.NumActivities
        })

        lastWeekNum += day.NumActivities
      }
    };

    setThisWeek();
    setLastWeek();

    const thisWeekList = [`No. of Activities: ${thisWeekNum}`]
    const lastWeekList = [`No. of Activities: ${lastWeekNum}`]
    

    return(
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
      //gridAutoRows="140px"
        gap="0.9rem"
        justifyContent={"center"}
        m="1.5rem auto 0 auto"
        width="98%"
      >
        <StatsList list={list} listTitle={title}/>
        <StatsList list={thisWeekList} listTitle={"This Week Stats"}/>
        <StatsList list={lastWeekList} listTitle={"Last Week Stats"}/>
        <BarChart2 header={"This Week Activities"} data={thisWeek} chartWidth={1000} />
        <BarChart2 header={"Last Week Activities"} data={lastWeek} chartWidth={1000} />
      </Box>

    );

}

export default HomePageHeaderListContainer;