import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Filter from "../../components/lists/filter";
import LongTermRideStatsTotals from "./longTermRideStatsTotals";
import LongTermRideStatsRides from "./longTermRideStatsRides";
import polyline from '@mapbox/polyline';

const LongTermStats = ({userStats, initialStats, activities}) => {

    const [rideTypesPieChartArray, setRideTypesPieChartArray] = useState([]);
    const [workoutScoresPieChartArray, setWorkoutScoresPieChartArray] = useState([]);
    const [rideTimePieChartArray, setRideTimePieChartArray] = useState([]);

    const [rideTotalsTitle, setRideTotalsTitle] = useState(null);
    const [rideTotalsArray, setRideTotalsArray] = useState([]);

    const [longestRideTitle, setLongestRideTitle] = useState(null);
    const [longestRideArray, setLongestRideArray] = useState([]);

    const [farthestRideTitle, setFarthestRideTitle] = useState(null);
    const [farthestRideArray, setFarthestRideArray] = useState([]);

    const [longestPolylineArray, setLongestPolylineArray] = useState(null);
    const [farthestPolylineArray, setFarthestPolylineArray] = useState(null);

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


    const handleStressListSelect = ((item) => {
        populateWorkoutStressScoresPieChart(item);
    });


    return(
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1.5rem",
        //   borderColor: "green",
        //   borderWidth: "2px",
        //   borderStyle: "solid"
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
            // longestRidePolyline={initialLongestRidePolyline()}
            longestRidePolyline={longestPolylineArray}
            farthestRideTitle={farthestRideTitle}
            farthestRideArray={farthestRideArray}
            // farthestRidePolyline={initialFarthestRidePolyline()}
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
            // longestRidePolyline={longestPolylineArray}
            farthestRideTitle={farthestRideTitle}
            farthestRideArray={farthestRideArray}
            farthestRidePolyline={initialFarthestRidePolyline()}
            // farthestRidePolyline={farthestPolylineArray}
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