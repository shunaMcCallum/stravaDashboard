import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Filter from "../../components/lists/filter";
import LongTermRideStatsTotals from "./longTermRideStatsTotals";
import LongTermRideStatsRides from "./longTermRideStatsRides";
import polyline from '@mapbox/polyline';

const LongTermStats = ({userStats, initialStats, activities}) => {

    // declare variables for populating the pie charts
    const [rideTypesPieChartArray, setRideTypesPieChartArray] = useState([]);
    const [workoutScoresPieChartArray, setWorkoutScoresPieChartArray] = useState([]);
    const [rideTimePieChartArray, setRideTimePieChartArray] = useState([]);

    // declare variables for populating stat boxes
    const [rideTotalsTitle, setRideTotalsTitle] = useState(null);
    const [rideTotalsArray, setRideTotalsArray] = useState([]);

    const [longestRideTitle, setLongestRideTitle] = useState(null);
    const [longestRideArray, setLongestRideArray] = useState([]);

    const [farthestRideTitle, setFarthestRideTitle] = useState(null);
    const [farthestRideArray, setFarthestRideArray] = useState([]);

    // declare variables for populating maps
    const [longestPolylineArray, setLongestPolylineArray] = useState(null);
    const [farthestPolylineArray, setFarthestPolylineArray] = useState(null);

    // calculate the values for all of these variables when the page is rendered
    useEffect(() => {
        populateRideTypesPieChart(initialStats);
    }, [userStats[0]]);

    useEffect(() => {
        populateWorkoutScoresPieChart(initialStats);
    }, [userStats[0]]);

    useEffect(() => {
        populateRideTimePieChart(initialStats);
    }, [userStats[0]]);

    useEffect(() => {
        populateRideTotalsList(initialStats);
    }, [userStats[0]]);

    useEffect(() => {
        populateLongestRideList(initialStats);
    }, [userStats[0]]);

    useEffect(() => {
        populateFarthestRideList(initialStats);
    }, [userStats[0]]);

    // three functions for populating the pie charts - the data needs to be formatted in the correct way, which we do here using
    // a list of numbers for different statistics we want to see
    // and "item" is fed into each function - the item will either be the default stats loaded with the page, or a selection from
    // a filter which will control the data shown in all three pie charts
    const populateRideTypesPieChart = ((item) => {
        setRideTypesPieChartArray([["Total number of rides", "Number of rides"], ["Workout rides", item.RideWorkout],
                ["Commutes", item.RideCommute], ["Virtual fun rides", item.RideVirtual],
                ["Outdoor fun rides", item.RideOutdoor]]);
    });

    const populateWorkoutScoresPieChart = ((item) => {
        setWorkoutScoresPieChartArray([["Total Number of Scores", "Score"], ["Score 0 - 70", item.Score0to70],
                ["Score 71 - 90", item.Score71to90], ["Score 91 - 110", item.Score91to110],
                ["Score 111 and above", item.Score111Plus]]);
    });

    const populateRideTimePieChart = ((item) => {
        setRideTimePieChartArray([["Total Time", "Time Spent on Each Ride Type"], ["Workout ride time", item.RideWorkout_Time],
                ["Commute ride time", item.RideCommute_Time], ["Virtual fun ride time", item.RideVirtual_Time],
                ["Outdoor fun ride time", item.RideOutdoor_Time]]);
    });

    // similar to the pie charts we populate our three stat boxes with nicely formatted data, which will updated with the filter too
    const populateRideTotalsList = ((item) => {
        setRideTotalsTitle(`Ride Totals for ${item.Header}`)
        setRideTotalsArray([
            `Total distance ridden (miles): ${item.DistanceMiles}`,
            `Total distance ridden (kilometers): ${item.DistanceKM}`,
            `Total moving time: ${item.MovingTime}`,
            `Total elapsed time: ${item.ElapsedTime}`,
            `Total ascent (ft): ${item.ElevationGainFt}`,
            `Total ascent (metres): ${item.ElevationGainMetres}`
        ]);
    });

    const populateLongestRideList = ((item) => {
        setLongestRideTitle(`Longest Ride for ${item.Header}`)
        setLongestRideArray([
            `Date: ${item.LongestRideDate}`,
            `Title: ${item.LongestRideTitle}`,
            `Distance: ${item.LongestRideDistance}`,
            `Time: ${item.LongestRideTime}`
        ]);
    });

    const populateFarthestRideList = ((item) => {
        setFarthestRideTitle(`Farthest Ride for ${item.Header}`)
        setFarthestRideArray([
            `Date: ${item.FarthestRideDate}`,
            `Title: ${item.FarthestRideTitle}`,
            `Distance: ${item.FarthestRideDistance}`,
            `Time: ${item.FarthestRideTime}`
        ]);
    });

    // and finally we need to format the polyline data in order to feed it through to our map
    const initialLongestRidePolyline = () => {
        if (initialStats.LongestRidePolyline) {
            return polyline.decode(initialStats.LongestRidePolyline);
        } else {
            return null;
        }
    };

    const initialFarthestRidePolyline = () => {
        if (initialStats.FarthestRidePolyline) {
            return polyline.decode(initialStats.FarthestRidePolyline);
        } else {
            return null;
        }
    };

    // event handler function - this is fed through to the filter which will control the data for each of the Pie Chart, Stat Box
    // and Map components in this section of the page
    const handleListSelect = ((item) => {
                populateRideTypesPieChart(item);
                populateWorkoutScoresPieChart(item);
                populateRideTimePieChart(item);
                populateRideTotalsList(item);
                populateLongestRideList(item);
                populateFarthestRideList(item);
                setLongestPolylineArray(polyline.decode(item.LongestRidePolyline));
                setFarthestPolylineArray(polyline.decode(item.FarthestRidePolyline));
    });

    // we have one final component which displays stress scores for different types of workout - I couldn't be bothered wrangling
    // the data from the activities list so I've hard coded in each of the workouts I'd like to see in this component - this is the
    // filter list which will determine which stress scores we are viewing at any one time
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

    // and we declare a variable for holding the stress scores, and a function for calculating them depending on the chosen filter
    const [workoutStressScores, setWorkoutStressScores] = useState([]);

    useEffect(() => {
        populateWorkoutStressScoresPieChart(workoutNames[0]);
    }, [])

    const populateWorkoutStressScoresPieChart = ((item) => {
        let scoresBelow70 = ["0to70", 0];
        let scores71to90 = ["71to90", 0];
        let scores91to110 = ["91to110", 0];
        let scoresAbove111 = ["110plus", 0];

        for(var activity of activities) {
                if (activity.Name.includes(item.Header)) {
                        if (activity.StressScore === null) {
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

    // and an event handler for this filter
    const handleStressListSelect = ((item) => {
        populateWorkoutStressScoresPieChart(item);
    });


    return(
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1.5rem"
      }}
      >
        <Box>
            <Filter list={userStats} handleListSelect={handleListSelect} />
        </Box>
        <LongTermRideStatsTotals 
            userStats={userStats}
            rideTypesPieChartArray={rideTypesPieChartArray} 
            workoutScoresPieChartArray={workoutScoresPieChartArray} 
            rideTimePieChartArray={rideTimePieChartArray}
            rideTotalsTitle={rideTotalsTitle} 
            rideTotalsArray={rideTotalsArray}
        />
        {longestPolylineArray ? 
        <LongTermRideStatsRides
            longestRideTitle={longestRideTitle}
            longestRideArray={longestRideArray}
            longestRidePolyline={longestPolylineArray}
            farthestRideTitle={farthestRideTitle}
            farthestRideArray={farthestRideArray}
            farthestRidePolyline={farthestPolylineArray}
            handleListSelect={handleListSelect}
            workoutNames={workoutNames}
            handleStressListSelect={handleStressListSelect}
            workoutStressScores={workoutStressScores}
        /> : 
        <LongTermRideStatsRides
            longestRideTitle={longestRideTitle}
            longestRideArray={longestRideArray}
            longestRidePolyline={initialLongestRidePolyline()}
            farthestRideTitle={farthestRideTitle}
            farthestRideArray={farthestRideArray}
            farthestRidePolyline={initialFarthestRidePolyline()}
            handleListSelect={handleListSelect}
            workoutNames={workoutNames}
            handleStressListSelect={handleStressListSelect}
            workoutStressScores={workoutStressScores}
        />
        }
        
      </Box>

    );

}

export default LongTermStats;