import React, {useState, useEffect} from "react";
import Filter from '../Components/Lists/Filter.js';
import PieChartsContainer from "../Components/Charts/PieChartsContainer.js";

const StatsChartsContainer = ({userStats}) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleListSelect = ((item) => {
                setSelectedItem(item);
            })

    return(

    <div>
        <p>Choose a time period to view stats</p>
        <Filter list={userStats} handleListSelect={handleListSelect} />
        {selectedItem ? <PieChartsContainer item={selectedItem} /> : null}
    </div>
    
    );
    
}

export default StatsChartsContainer;