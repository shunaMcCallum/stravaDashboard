import React, {useState, useEffect} from "react";
import Filter from '../Components/Lists/Filter.js';
import PieChart from "../Components/Charts/PieChart.js";
import ListContainer from "../Components/Lists/ListContainer.js";
import Map from "../Components/Maps/Map.js";
import polyline from '@mapbox/polyline'

const StatsChartsContainer = ({userStats}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [rideTypesPieChartArray, setRideTypesPieChartArray] = useState([]);
    const [rideTypesPieChartTitle, setRideTypesPieChartTitle] = useState(null);
    const [rideTypesPieChartOptions, setRideTypesPieChartOptions] = useState({});

    const [workoutScoresPieChartArray, setWorkoutScoresPieChartArray] = useState([]);
    const [workoutScoresPieChartTitle, setWorkoutScoresPieChartTitle] = useState(null);
    const [workoutScoresPieChartOptions, setWorkoutScoresPieChartOptions] = useState({});

    const [rideTimePieChartArray, setRideTimePieChartArray] = useState([]);
    const [rideTimePieChartTitle, setRideTimePieChartTitle] = useState(null);
    const [rideTimePieChartOptions, setRideTimePieChartOptions] = useState({});

    const [rideTotalsTitle, setRideTotalsTitle] = useState(null);
    const [rideTotalsArray, setRideTotalsArray] = useState([]);

    const [longestRideTitle, setLongestRideTitle] = useState(null);
    const [longestRideArray, setLongestRideArray] = useState([]);

    const [farthestRideTitle, setFarthestRideTitle] = useState(null);
    const [farthestRideArray, setFarthestRideArray] = useState([]);

    const populateRideTypesPieChart = ((item) => {
        setRideTypesPieChartArray([["Total number of rides", "Number of rides"], ["Workout rides", item.RideWorkout], 
                ["Commutes", item.RideCommute], ["Virtual fun rides", item.RideVirtual],
                ["Outdoor fun rides", item.RideOutdoor]])
                setRideTypesPieChartOptions({         
                    title: "Types of bike rides",
                    is3D: true})
                setRideTypesPieChartTitle(`Stats for: ${item.Header}`)
    })

    const populateWorkoutScoresPieChart = ((item) => {
        setWorkoutScoresPieChartArray([["Total Number of Scores", "Score"], ["Score 0 - 70", item.Score0to70], 
                ["Score 71 - 90", item.Score71to90], ["Score 91 - 110", item.Score91to110],
                ["Score 111 and above", item.Score111Plus]])
                setWorkoutScoresPieChartOptions ({         
                    title: "Workout ride scores",
                    is3D: true})
                setWorkoutScoresPieChartTitle(`Stats for: ${item.Header}`)
    })

    const populateRideTimePieChart = ((item) => {
        setRideTimePieChartArray([["Total Time", "Time Spent on Each Ride Type"], ["Workout ride time", item.RideWorkout_Time], 
                ["Commute ride time", item.RideCommute_Time], ["Virtual fun ride time", item.RideVirtual_Time],
                ["Outdoor fun ride time", item.RideOutdoor_Time]])
                setRideTimePieChartOptions ({         
                    title: "Time spent on each ride type",
                    is3D: true})
                setRideTimePieChartTitle(`Stats for: ${item.Header}`)
    })

    const populateRideTotalsList = ((item) => {
        setRideTotalsTitle(`Ride Totals for ${item.Header}`)
        setRideTotalsArray([
            `Total distance ridden (miles): ${item.DistanceMiles}`,
            `Total distance ridden (kilometers): ${item.DistanceKM}`,
            `Total moving time: ${item.MovingTime}`,
            `Total elapsed time: ${item.ElapsedTime}`,
            `Total ascent (ft): ${item.ElevationGainFt}`,
            `Total ascent (metres): ${item.ElevationGainMetres}`
        ])
    })

    const populateLongestRideList = ((item) => {
        setLongestRideTitle(`Longest Ride for ${item.Header}`)
        setLongestRideArray([
            `Date: ${item.LongestRideDate}`,
            `Title: ${item.LongestRideTitle}`,
            `Distance: ${item.LongestRideDistance}`,
            `Time: ${item.LongestRideTime}`
        ])
    })

    const populateFarthestRideList = ((item) => {
        setFarthestRideTitle(`Farthest Ride for ${item.Header}`)
        setFarthestRideArray([
            `Date: ${item.FarthestRideDate}`,
            `Title: ${item.FarthestRideTitle}`,
            `Distance: ${item.FarthestRideDistance}`,
            `Time: ${item.FarthestRideTime}`
        ])
    })

    const [polylineArray, setPolylineArray] = useState([]);
    const [centre, setCentre] = useState([]);

    const handleListSelect = ((item) => {
                setSelectedItem(item);
                //console.log(item);
                
                populateRideTypesPieChart(item);
                populateWorkoutScoresPieChart(item);
                populateRideTimePieChart(item);
                populateRideTotalsList(item);
                populateLongestRideList(item);
                populateFarthestRideList(item);

                setCentre(polyline.decode(item.LongestRidePolyline)[0]);
                setPolylineArray(polyline.decode(item.LongestRidePolyline));
    })

    return(
        <>
            <p>Choose a time period to view stats</p>
            <Filter list={userStats} handleListSelect={handleListSelect} />
            {selectedItem ? 
            <>
            <PieChart chartArray={rideTypesPieChartArray} chartOptions={rideTypesPieChartOptions} title={rideTypesPieChartTitle} />
            <PieChart chartArray={workoutScoresPieChartArray} chartOptions={workoutScoresPieChartOptions} title={workoutScoresPieChartTitle} />
            <PieChart chartArray={rideTimePieChartArray} chartOptions={rideTimePieChartOptions} title={rideTimePieChartTitle} />
            <ListContainer title={rideTotalsTitle} list={rideTotalsArray} />
            <ListContainer title={longestRideTitle} list={longestRideArray} />
            <Map polyline={polylineArray} centre={centre} />
            <ListContainer title={farthestRideTitle} list={farthestRideArray} />
            </>
             : null }
        </>
    );
}

export default StatsChartsContainer;