import React from "react";
import { Box } from "@mui/material";

const Filter = ({list, handleListSelect}) => {

    const listOptions = list.map((item, index) => {
        return <option key={index} value={index}>{item.Header}</option>
    });

    const handleChange = (event) => {
        const chosenItem = list[event.target.value]
        handleListSelect(chosenItem)
    }

    return(
    <Box>
        <select onChange={handleChange} defaultValue="">
            <option disabled value="">Select an option</option>
            {listOptions}
        </select>
    </Box>
    
    );
    
}

export default Filter;