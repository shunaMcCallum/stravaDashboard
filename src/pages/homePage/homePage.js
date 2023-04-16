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

    const [workoutStressScores, setWorkoutStressScores] = useState([["TotalNumberOfWorkouts", "NumberWithinStressScoreRange"]]);
    const workoutNames = [
        {Header: "2 x 20 mins FTP"},
        {Header: "2 x 30 mins FTP"},
        {Header: "2 x 15 mins FTP"},
        {Header: "3 x 15 mins FTP"},
        {Header: "4 x 10 mins FTP"},
        {Header: "4 x 12 mins FTP"},
        {Header: "VO2 Max"},
        {Header: "Zone 2"},
        {Header: "Tempo Ride"},
        {Header: "Tempo with Surges"},
        {Header: "SST"}
    ];


    const populateWorkoutStressScoresPieChart = ((item) => {

        let scoresBelow70 = ["0to70", 0];
        let scores71to90 = ["71to90", 0];
        let scores91to110 = ["91to110", 0];
        let scoresAbove111 = ["110plus", 0];

        for(var activity of activities) {
                if (activity.Name.includes(item.Header)) {
                        if (activity.StressScore === null) {
                                console.log(activity.StressScore);
                        } else if (activity.StressScore < 71) {
                                scoresBelow70[1] ++;
                        } else if (activity.StressScore >= 71 && activity.StressScore < 91) {
                                scores71to90[1] ++;
                        } else if (activity.StressScore >= 91 && activity.StressScore < 111) {
                                scores91to110[1] ++;
                        } else if (activity.StressScore > 110) {
                                scoresAbove111[1] ++;
                        }
                }
        }
        
        setWorkoutStressScores([["TotalNumberOfWorkouts", "NumberWithinStressScoreRange"], scoresBelow70, scores71to90, scores91to110, scoresAbove111]);
    });


    const handleListSelect = ((item) => {
        populateWorkoutStressScoresPieChart(item);
    });

    return(
    <Box>
        {/* ROW 1 */}
        <OverallStats userDetails={userDetails} />

        {/* ROW 2 */}
        <ShortTermStats thisWeekActivities={thisWeekActivities} lastWeekActivities={lastWeekActivities} thisMonthActivities={thisMonthActivities} lastMonthActivities={lastMonthActivities} />
        
        {/* ROW 3 */}
        {/* <Commutes morningCommutes={morningCommutes} afternoonCommutes={afternoonCommutes} /> */}
        <Commutes activities={activities} />

        {/* ROW 4 */}
        <LongTermStats userStats={userStats} initialStats={initialStats} />


         {/* ROW 5 */}
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
        <Box
         sx={{
                width: "45%",
                // overflow: "auto",
                marginLeft: "3rem"
         }}
         >
           <div id="stats-charts-container-header">
                <h3>Workout Stress Scores</h3>
                <Filter list={workoutNames} handleListSelect={handleListSelect} />
           </div>
           {workoutStressScores ?
           <div id="pie-charts-container" className="pie-chart-with-header">
                <PieChart chartArray={workoutStressScores} />
           </div>
           : null
                }
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