import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Filter from "../../components/lists/filter";
import LongTermRideStatsTotals from "./longTermRideStatsTotals";
import LongTermRideStatsRides from "./longTermRideStatsRides";
import polyline from '@mapbox/polyline';

const LongTermStats = ({userStats, initialStats}) => {
    // console.log(initialStats)

    const [rideTypesPieChartArray, setRideTypesPieChartArray] = useState([]);
    const [workoutScoresPieChartArray, setWorkoutScoresPieChartArray] = useState([]);
    const [rideTimePieChartArray, setRideTimePieChartArray] = useState([]);

    const [rideTotalsTitle, setRideTotalsTitle] = useState(null);
    const [rideTotalsArray, setRideTotalsArray] = useState([]);

    const [longestRideTitle, setLongestRideTitle] = useState(null);
    const [longestRideArray, setLongestRideArray] = useState([]);

    const [farthestRideTitle, setFarthestRideTitle] = useState(null);
    const [farthestRideArray, setFarthestRideArray] = useState([]);

    const [longestPolylineArray, setLongestPolylineArray] = useState([]);
    const [farthestPolylineArray, setFarthestPolylineArray] = useState([]);

    useEffect(() => {
        populateRideTypesPieChart(initialStats);
    }, userStats[0]);

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

    useEffect(() => {
        setLongestPolylineArray(initialLongestRidePolyline())
    }, [userStats[0]]);

    const initialLongestRidePolyline = () => {
        if (initialStats.LongestRidePolyline) {
            return polyline.decode(initialStats.LongestRidePolyline);
        } else {
            return null
        }
    };

    useEffect(() => {
        setFarthestPolylineArray(initialFarthestRidePolyline())
    }, [userStats[0]]);

    const initialFarthestRidePolyline = () => {
        if (initialStats.FarthestRidePolyline) {
            return polyline.decode(initialStats.FarthestRidePolyline);
        } else {
            return null
        }
    };

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
        {/* <LongTermRideStatsRides
            longestRideTitle={longestRideTitle}
            longestRideArray={longestRideArray}
            longestRidePolyline={longestPolylineArray}
            farthestRideTitle={farthestRideTitle}
            farthestRideArray={farthestRideArray}
            farthestRidePolyline={farthestPolylineArray}
            handleListSelect={handleListSelect}

        /> */}
      </Box>

    );

}

export default LongTermStats;