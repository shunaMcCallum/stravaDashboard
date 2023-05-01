import React from "react";
import { Box, Typography } from "@mui/material";
import PieChart from "../../components/charts/pieChart/pieChart.js";
import StatsList from "../../components/lists/statsList.js";

    const LongTermRideStatsTotals = ({rideTypesPieChartArray, workoutScoresPieChartArray, rideTimePieChartArray, rideTotalsTitle, rideTotalsArray}) => {

    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "1.5rem"
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#332240",
                    boxShadow:"0rem 0.15rem 1.5rem black"
                }}
            >
                <Typography variant="h5" lineHeight="2">Ride Types</Typography>
                <PieChart chartArray={rideTypesPieChartArray} width={"20rem"} height={"15rem"} />
            </Box>
            <Box
                sx={{
                    backgroundColor: "#332240",
                    boxShadow:"0rem 0.15rem 1.5rem black"
                }}
            >
                <Typography variant="h5" lineHeight="2">Ride Workout Scores</Typography>
                <PieChart chartArray={workoutScoresPieChartArray} width={"20rem"} height={"15rem"} />
            </Box>
            <Box
                sx={{
                    backgroundColor: "#332240",
                    boxShadow:"0rem 0.15rem 1.5rem black"
                }}
            >
                <Typography variant="h5" lineHeight="2">Ride Time by Type</Typography>
                <PieChart chartArray={rideTimePieChartArray} width={"20rem"} height={"15rem"} />
            </Box>
            <Box
                sx={{
                    width: "25rem",
                }}
            >
                <StatsList title={rideTotalsTitle} list={rideTotalsArray} />
            </Box>
        </Box>
    );
}

export default LongTermRideStatsTotals;