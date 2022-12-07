import React from "react";

const StatsList = ({title, list}) => {

    const listItems = list.map((item) => {
        return(
            <p>{item}</p>
        )
    })

    return(
        <div>
            <h3>{title}</h3>
                {listItems}
        </div>
    );
    
}

export default StatsList;