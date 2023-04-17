import React from "react";
import { Box, Typography } from "@mui/material";
import Filter from "../../components/lists/filter.js";
import PieChart from "../../components/charts/pieChart/pieChart.js";

    const LongTermRideStatsStressScores = ({workoutNames, handleStressListSelect, workoutStressScores}) => {

    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                // borderColor: "green",
                // borderWidth: "2px",
                // borderStyle: "solid"
            }}
        >
            <Box>
                <Filter list={workoutNames} handleListSelect={handleStressListSelect} />
            </Box>
            <Box
                sx={{
                    backgroundColor: "#332240",
                    boxShadow:"0rem 0.15rem 1.5rem black",
                    marginTop: "1.5rem",
                }}
            >
                <Typography variant="h5" lineHeight="2">Workout Stress Scores</Typography>
                <PieChart chartArray={workoutStressScores} width={"28rem"} height={"32.5rem"} />
            </Box>
            
        </Box>
    );
}

export default LongTermRideStatsStressScores;