import React from 'react';

const FilmDetails = ({ item }) => {

    return (
        <div>
            <p>Stats for: {item.Header}</p>
            <p>Activities: {item.Activities}</p>
        </div>
    );

}

export default FilmDetails;