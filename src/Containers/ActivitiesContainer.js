import React from "react";
import ActivitiesList from '../Components/ActivitiesList.js';

const ActivitiesContainer = ({activities}) => {

    return(
        <div>
            {console.log(activities)}
            <br></br>
            <h3>Your Activities to Date:</h3>
            <ActivitiesList activities={activities}/>
        </div>
    );
}

export default ActivitiesContainer;