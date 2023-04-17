import React, {useState} from "react";
import { Box } from "@mui/material";
import OverallStats from "./overallStats.js";
import ShortTermStats from "./shortTermStats.js";
import Commutes from "./commutes.js";
import LongTermStats from "./longTermStats.js";
import LineChart2 from "../../components/charts/lineChart/lineChart2.js";
import Filter from "../../components/lists/filter.js";
import PieChart from "../../components/charts/pieChart/pieChart.js";

const HomePage = ({userDetails, userStats, initialStats, activities, alpeDuZwiftEfforts, thisWeekActivities, lastWeekActivities, thisMonthActivities, lastMonthActivities}) => {

    const alpes = []

    const setAlpeDuZwiftData = () => {
        for(var alpe of alpeDuZwiftEfforts) {
                
                var array = alpe.ElapsedTime.split(":");
                var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

                        alpes.push({
                             Date: alpe.Date,
                             Time: seconds
                        })
                }
        };

    setAlpeDuZwiftData();

    return(
    <Box>
        {/* ROW 1 */}
        <OverallStats userDetails={userDetails} />

        {/* ROW 2 */}
        <ShortTermStats thisWeekActivities={thisWeekActivities} lastWeekActivities={lastWeekActivities} thisMonthActivities={thisMonthActivities} lastMonthActivities={lastMonthActivities} />
        
        {/* ROW 3 */}
        {/* <Commutes morningCommutes={morningCommutes} afternoonCommutes={afternoonCommutes} /> */}
        <Commutes activities={activities} />

        {/* ROW 4 & 5 */}
        <LongTermStats userStats={userStats} initialStats={initialStats} activities={activities} />


         {/* ROW 6 */}
         <Box
           sx={{
                display: "flex",
                height: "60%",
                marginTop: "2rem",
                marginBottom: "0rem"
           }}
           >
        <Box
         sx={{
                height: "57%",
                width: "45%",
                overflow: "auto",
                marginLeft: "1.5rem",
                '&:hover::-webkit-scrollbar': {
                        display: 'block',
                        },
                        '&::-webkit-scrollbar': {
                        display: 'none',
                        width: '0.512rem',
                        },
                        '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 2rem rgba(0,0,0,0.00)',
                        webkitBoxShadow: 'inset 0 0 2rem rgba(0,0,0,0.00)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#8d8e90',
                        height: '3rem',
                        borderRadius: '1rem',
                        },
         }}
         >
           <LineChart2 header={"Alpe Du Zwift Segment Times"} data={alpes} chartWidth={650} />
        </Box>
        </Box>

        {/* ROW 5 */}
        <Box
           sx={{
                display: "flex",
                height: "60%",
                marginTop: "2rem",
                marginBottom: "0rem"
           }}>
          <Box>
                
          </Box>
        </Box>

    </Box>
    
    );
    
}

export default HomePage;