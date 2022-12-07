import React from 'react';
import ActivityListItem from './ActivityListItem';

// onCountryClick function not actually used in this component but is passed down to ListItem
const ActivitiesList = ({activities}) => {

    const activitiesItems = activities.map((activity, index) => {
        return <ActivityListItem activity={activity} key={index} />
    })

    return (

    <div>
        {activitiesItems}
    </div>
    
    );
}

export default ActivitiesList;