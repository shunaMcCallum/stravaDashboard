import React from "react";
import StatsList from "./StatsList";

const ListContainer = ({title, list}) => {

    return(
        <div>
            <h3>{title}</h3>
            <StatsList list={list}/>
        </div>
    );
    
}

export default ListContainer;