import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeaderSubHeader = ({header, subheader}) => {

    return(
    <Box
        sx={{
            m: "auto",
            p: "1rem 0",
            minWidth: "20rem",
            maxWidth: "50rem",
            minHeight: "3.5rem",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#332240",
            boxShadow: "0rem 0.15rem 1.5rem black",
            // color: "#FC5200"
        }}    
    >
        <Typography 
            variant="h4"
            lineHeight="1.5"
        >
            {header}
        </Typography>
        <Typography 
            variant="h5"
            lineHeight="1.5"
            fontStyle="italic"
        >
            {subheader}
        </Typography>
    </Box>
    
    ); 
}

export default SectionHeaderSubHeader;