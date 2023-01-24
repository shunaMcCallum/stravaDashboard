import React, {useState, useEffect} from "react";
import Filter from '../Components/Lists/Filter.js';
import PieChart from "../Components/Charts/PieChart.js";
import ListContainer from "../Components/Lists/ListContainer.js";
import Map from "../Components/Maps/Map.js";
import polyline from '@mapbox/polyline'
import '../Styling/StatsChartsContainer.css'

const StatsChartsContainer = ({userStats}) => {

    const [selectedItem, setSelectedItem] = useState(null);

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

    const populateRideTypesPieChart = ((item) => {
        setRideTypesPieChartArray([["Total number of rides", "Number of rides"], ["Workout rides", item.RideWorkout], 
                ["Commutes", item.RideCommute], ["Virtual fun rides", item.RideVirtual],
                ["Outdoor fun rides", item.RideOutdoor]])
    })

    const populateWorkoutScoresPieChart = ((item) => {
        setWorkoutScoresPieChartArray([["Total Number of Scores", "Score"], ["Score 0 - 70", item.Score0to70], 
                ["Score 71 - 90", item.Score71to90], ["Score 91 - 110", item.Score91to110],
                ["Score 111 and above", item.Score111Plus]])
    })

    const populateRideTimePieChart = ((item) => {
        setRideTimePieChartArray([["Total Time", "Time Spent on Each Ride Type"], ["Workout ride time", item.RideWorkout_Time], 
                ["Commute ride time", item.RideCommute_Time], ["Virtual fun ride time", item.RideVirtual_Time],
                ["Outdoor fun ride time", item.RideOutdoor_Time]])
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

    const handleListSelect = ((item) => {
                setSelectedItem(item);
                
                populateRideTypesPieChart(item);
                populateWorkoutScoresPieChart(item);
                populateRideTimePieChart(item);
                populateRideTotalsList(item);
                populateLongestRideList(item);
                populateFarthestRideList(item);
                setLongestPolylineArray(polyline.decode(item.LongestRidePolyline));
                setFarthestPolylineArray(polyline.decode(item.FarthestRidePolyline));
    })

    return(
        <div>
            <p>Choose a time period to view stats</p>
            <Filter list={userStats} handleListSelect={handleListSelect} />
            {selectedItem ? 
            <div>
                <div id="pie-charts-container">
                    <div className="pie-chart-with-header">
                        <h3 className="pie-chart-header">Ride Types</h3>
                        <PieChart chartArray={rideTypesPieChartArray} />
                    </div>
                    <div className="pie-chart-with-header">
                        <h3 className="pie-chart-header">Ride Workout Scores</h3>
                        <PieChart chartArray={workoutScoresPieChartArray} />
                    </div>
                    <div className="pie-chart-with-header">
                        <h3 className="pie-chart-header">Ride Time by Type</h3>
                        <PieChart chartArray={rideTimePieChartArray} />
                    </div>
                </div>
                <ListContainer title={rideTotalsTitle} list={rideTotalsArray} />
                <ListContainer title={longestRideTitle} list={longestRideArray} />
                <Map polyline={longestPolylineArray} />
                <ListContainer title={farthestRideTitle} list={farthestRideArray} />
                <Map polyline={farthestPolylineArray} />
            </div>
             : null }
        </div>
    );
}

export default StatsChartsContainer;