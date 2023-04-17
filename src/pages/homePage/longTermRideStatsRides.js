import React from "react";
import { Box, Typography } from "@mui/material";
import StatsList from "../../components/lists/statsList.js";
import Map from "../../components/maps/map.js";

    const LongTermRideStatsRides = ({longestRideTitle, longestRideArray, longestRidePolyline, farthestRideTitle, farthestRideArray, farthestRidePolyline}) => {

    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "1.5rem",
                // borderColor: "green",
                // borderWidth: "2px",
                // borderStyle: "solid"
            }}
        >
            <Box>
                <StatsList title={longestRideTitle} list={longestRideArray} />
                <Map polyline={longestRidePolyline} />
            </Box>
            <Box>
                <StatsList title={farthestRideTitle} list={farthestRideArray} />
                <Map polyline={farthestRidePolyline} />
            </Box>
           
        </Box>

    );
}

export default LongTermRideStatsRides;