import React from "react";
import { Box, Typography } from "@mui/material";
import StatsList from "../../components/lists/statsList.js";
import LongTermRideStatsStressScores from "./longTermRideStatsStressScores.js";
import Map from "../../components/maps/map.js";

    const LongTermRideStatsRides = ({longestRideTitle, longestRideArray, longestRidePolyline, farthestRideTitle, farthestRideArray, farthestRidePolyline, workoutNames, handleStressListSelect, workoutStressScores}) => {

    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                // alignItems: "center",
                marginTop: "1.5rem",
                // borderColor: "green",
                // borderWidth: "2px",
                // borderStyle: "solid"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "2rem",
                }}
            >
                <Box sx={{width: "80%", backgroundColor:"#332240"}}>
                    <StatsList list={longestRideArray} listTitle={longestRideTitle} />
                </Box>
                <Map polyline={longestRidePolyline} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                }}
            >
                <Box sx={{width: "80%", backgroundColor:"#332240"}}>
                    <StatsList list={farthestRideArray} listTitle={farthestRideTitle} />
                </Box>
                <Map polyline={farthestRidePolyline} />
            </Box>
            <Box
                sx={{
                    marginLeft: "1.5rem",
                }}
            >
                <LongTermRideStatsStressScores workoutNames={workoutNames} handleStressListSelect={handleStressListSelect} workoutStressScores={workoutStressScores} />
            </Box>
        </Box>

    );
}

export default LongTermRideStatsRides;