import React, {useState} from "react";
import { Box } from "@mui/material";
import OverallStats from "./overallStats.js";
import ShortTermStats from "./shortTermStats.js";
import HomePageHeaderListContainer from "./homePageHeaderListContainer.js";
import HomeStatsChartsContainer from './homeStatsChartsContainer.js';
import polyline from '@mapbox/polyline';
import "../../Styling/HomePage.css";
import LineChart2 from "../../components/charts/lineChart/lineChart2.js";
import Filter from "../../components/lists/filter.js";
import PieChart from "../../components/charts/pieChart/pieChart.js";

const HomePage = ({userDetails, userStats, initialStats, activities, alpeDuZwiftEfforts, thisWeekActivities, lastWeekActivities, thisMonthActivities, lastMonthActivities}) => {

    const rideTypesPieChartArray = [
            ["Total number of rides", "Number of rides"], 
            ["Workout rides", initialStats.RideWorkout], 
            ["Commutes", initialStats.RideCommute], 
            ["Virtual fun rides", initialStats.RideVirtual],
            ["Outdoor fun rides", initialStats.RideOutdoor]
    ];

    const workoutScoresPieChartArray = [
            ["Total Number of Scores", "Score"], 
            ["Score 0 - 70", initialStats.Score0to70], 
            ["Score 71 - 90", initialStats.Score71to90], 
            ["Score 91 - 110", initialStats.Score91to110],
            ["Score 111 and above", initialStats.Score111Plus]
    ];

    const rideTimePieChartArray = [
            ["Total Time", "Time Spent on Each Ride Type"], 
            ["Workout ride time", initialStats.RideWorkout_Time], 
            ["Commute ride time", initialStats.RideCommute_Time], 
            ["Virtual fun ride time", initialStats.RideVirtual_Time],
            ["Outdoor fun ride time", initialStats.RideOutdoor_Time]
    ];

    const rideTotalsTitle = `Ride Totals for ${initialStats.Header}`;
    const rideTotalsArray = [
            `Total distance ridden (miles): ${initialStats.DistanceMiles}`,
            `Total distance ridden (kilometers): ${initialStats.DistanceKM}`,
            `Total moving time: ${initialStats.MovingTime}`,
            `Total elapsed time: ${initialStats.ElapsedTime}`,
            `Total ascent (ft): ${initialStats.ElevationGainFt}`,
            `Total ascent (metres): ${initialStats.ElevationGainMetres}`
    ];

    const longestRideTitle = `Longest Ride for ${initialStats.Header}`;
    const longestRideArray = [
            `Date: ${initialStats.LongestRideDate}`,
            `Title: ${initialStats.LongestRideTitle}`,
            `Distance: ${initialStats.LongestRideDistance}`,
            `Time: ${initialStats.LongestRideTime}`
    ];

    const farthestRideTitle = `Farthest Ride for ${initialStats.Header}`;
    const farthestRideArray = [
            `Date: ${initialStats.FarthestRideDate}`,
            `Title: ${initialStats.FarthestRideTitle}`,
            `Distance: ${initialStats.FarthestRideDistance}`,
            `Time: ${initialStats.FarthestRideTime}`
    ];

    const initialLongestRidePolyline = () => {
        if (initialStats.LongestRidePolyline) {
                //console.log("initialStats")
                return polyline.decode(initialStats.LongestRidePolyline);
        } else {
                //console.log("noStats")
                return null
        }
    };

    const initialFarthestRidePolyline = () => {
        if (initialStats.FarthestRidePolyline) {
                return polyline.decode(initialStats.FarthestRidePolyline);
        } else {
                return null
        }
    };

    const morningCommutes = []
    const afternoonCommutes = []
    const alpes = []

    const setMorningData = () => {
        for(var activity of activities) {
                if (activity.RideType = "Commute" && activity.Name === "Morning Ride") {
                
                var array = activity.ElapsedTime.split(":");
                var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

                        morningCommutes.push({
                             Date: activity.Date,
                             Time: seconds
                        })
                }
        }
    };

    const setAfternoonData = () => {
        for(var activity of activities) {
                if (activity.RideType === "Commute" && activity.Name === "Afternoon Ride" || activity.Name === "Evening Ride") {
                
                var array = activity.ElapsedTime.split(":");
                var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

                        afternoonCommutes.push({
                             Date: activity.Date,
                             Time: seconds
                        })
                }
        }
    };

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

    setMorningData();
    setAfternoonData();
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
    <div id="home-page-container">
        {/* ROW 1 */}
        <OverallStats userDetails={userDetails} />

        {/* ROW 2 */}
        <ShortTermStats thisWeekActivities={thisWeekActivities} lastWeekActivities={lastWeekActivities} thisMonthActivities={thisMonthActivities} lastMonthActivities={lastMonthActivities} />
        
        {/* ROW 3 */}
        <HomeStatsChartsContainer 
          userStats={userStats} 
          initialRideTypesPieChartArray={rideTypesPieChartArray} 
          initialWorkoutScoresPieChartArray={workoutScoresPieChartArray} 
          initialRideTimePieChartArray={rideTimePieChartArray}
          initialRideTotalsTitle={rideTotalsTitle} 
          initialRideTotalsArray={rideTotalsArray}
          initialLongestRideTitle={longestRideTitle}
          initialLongestRideArray={longestRideArray}
          initialFarthestRideTitle={farthestRideTitle}
          initialFarthestRideArray={farthestRideArray}
          initialLongestRidePolyline={initialLongestRidePolyline()}
          initialFarthestRidePolyline={initialFarthestRidePolyline()}
        />
      
        {/* ROW 4 */}
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
                height: "100%",
                width: "45%",
                //backgroundColor: "#332240",
                overflow: "auto",
                marginLeft: "1.5rem",
                marginBottom: "0rem",
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
           <LineChart2 header={"Morning Commute Times"} data={morningCommutes} chartWidth={8000} />
        </Box>
        <Box
         sx={{
                height: "100%",
                width: "45%",
                overflow: "auto",
                marginLeft: "1.5rem",
                marginBottom: "0rem",
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
           <LineChart2 header={"Afternoon Commute Times"} data={afternoonCommutes} chartWidth={8000} />
        </Box>
        </Box>

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

    </div>
    
    );
    
}

export default HomePage;