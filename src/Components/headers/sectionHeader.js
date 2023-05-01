import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeader = ({text}) => {

    return(
    <Box
        sx={{
            m: "auto",
            width: "25rem",
            height: "3.5rem",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#332240",
            boxShadow: "0rem 0.15rem 1.5rem black",
        }}    
    >
        <Typography 
            variant="h4"
            lineHeight="1"
        >
            {text}
        </Typography>
    </Box>
    
    ); 
}

export default SectionHeader;