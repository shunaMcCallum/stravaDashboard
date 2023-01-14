import React, {useState, useEffect} from "react";
import Filter from '../Components/Lists/Filter.js';
import PieChart from "../Components/Charts/PieChart.js";

const StatsChartsContainer = ({userStats}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [rideTypesPieChartArray, setRideTypesPieChartArray] = useState([]);
    const [rideTypesPieChartTitle, setRideTypesPieChartTitle] = useState(null);
    const [rideTypesPieChartOptions, setRideTypesPieChartOptions] = useState({});


    const [workoutScoresPieChartArray, setWorkoutScoresPieChartArray] = useState([]);
    const [workoutScoresPieChartTitle, setWorkoutScoresPieChartTitle] = useState(null);
    const [workoutScoresPieChartOptions, setWorkoutScoresPieChartOptions] = useState({});

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
                setRideTypesPieChartTitle(`Stats for: ${item.Header}`)
    })

    const handleListSelect = ((item) => {
                setSelectedItem(item);
                console.log(item)

                // setRideTypesPieChartArray([["Total number of rides", "Number of rides"], ["Workout rides", item.RideWorkout], 
                // ["Commutes", item.RideCommute], ["Virtual fun rides", item.RideVirtual],
                // ["Outdoor fun rides", item.RideOutdoor]])
                // setRideTypesPieChartOptions ({         
                //     title: "Types of bike rides",
                //     is3D: true})
                // setRideTypesPieChartTitle(`Stats for: ${item.Header}`)

                populateRideTypesPieChart(item);
                populateWorkoutScoresPieChart(item);
    })

    return(
        <>
            <p>Choose a time period to view stats</p>
            <Filter list={userStats} handleListSelect={handleListSelect} />
            {selectedItem ? 
            <>
            <PieChart chartArray={rideTypesPieChartArray} chartOptions={rideTypesPieChartOptions} title={rideTypesPieChartTitle} />
            <PieChart chartArray={workoutScoresPieChartArray} chartOptions={workoutScoresPieChartOptions} title={workoutScoresPieChartTitle} />
            </>
             : null}
        </>
    
    );
    
}

export default StatsChartsContainer;