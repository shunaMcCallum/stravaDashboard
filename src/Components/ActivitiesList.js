import React from 'react';
import ActivityListItem from './ActivityListItem';

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