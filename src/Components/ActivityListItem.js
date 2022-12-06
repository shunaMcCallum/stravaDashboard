import React from 'react';

const ActivityListItem = ({activity}) => {

  return (
    <div>
        <p>{activity.name}</p>
    </div>
  );
}

export default ActivityListItem;