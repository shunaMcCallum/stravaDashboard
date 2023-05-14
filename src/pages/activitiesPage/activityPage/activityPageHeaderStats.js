import React from "react";
import {Box} from "@mui/material";
import SectionHeader from "../../../components/headers/sectionHeader";

const ActivityPageHeaderStats = ({activity}) => {

    return(
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1.5rem"
        }}
        >
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                <Box>
                    <SectionHeader text={`Activity ID: ${activity.id}`} />
                </Box>
                <Box>
                    <SectionHeader text={`Date: ${activity.Date}`} />
                </Box>
                <Box>
                    <SectionHeader text={`Time: ${activity.StartTime}`} />
                </Box>
            </Box>
        </Box>
    );
}

export default ActivityPageHeaderStats;