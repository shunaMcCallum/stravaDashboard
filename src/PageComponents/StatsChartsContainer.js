import React, {useState, useEffect} from "react";
import Filter from '../Components/Lists/Filter.js';
import PieChartsContainer from "../Components/Charts/PieChartsContainer.js";

const StatsChartsContainer = ({userStats}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [rideTypesPieChartArray, setRideTypesPieChartArray] = useState([]);
    const [rideTypesPieChartOptions, setRideTypesPieChartOptions] = useState({});
    const [rideTypesPieChartTitle, setRideTypesPieChartTitle] = useState(null);

    const handleListSelect = ((item) => {
                setSelectedItem(item);
                console.log(item)
                setRideTypesPieChartArray([["Total number of rides", "Number of rides"], ["Workout rides", item.RideWorkout], 
                ["Commutes", item.RideCommute], ["Virtual fun rides", item.RideVirtual],
                ["Outdoor fun rides", item.RideOutdoor]])
                setRideTypesPieChartOptions ({         
                    title: "Types of bike rides",
                    is3D: true})
                setRideTypesPieChartTitle(`Stats for: ${item.Header}`)
    })

    return(
        <>
            <p>Choose a time period to view stats</p>
            <Filter list={userStats} handleListSelect={handleListSelect} />
            {selectedItem ? <PieChartsContainer chartArray={rideTypesPieChartArray} chartOptions={rideTypesPieChartOptions} title={rideTypesPieChartTitle} /> : null}
        </>
    
    );
    
}

export default StatsChartsContainer;