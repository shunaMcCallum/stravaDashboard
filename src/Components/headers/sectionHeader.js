import React from "react";
import '../../Styling/SectionHeader.css';

const SectionHeader = ({text}) => {

    return(
    <div id="section-header-container">
        <h2>{text}</h2>
    </div>
    
    ); 
}

export default SectionHeader;