import React from "react";
import { Box } from "@mui/material";
import StatsList from "../../../components/lists/statsList";

const ActivityPageBottomStats = ({list1, list2, list3, list4, list5}) => {

    return(
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1.5rem"
        }}>
            <Box
            sx={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                <Box
                sx={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                }}
                >
                    <StatsList list={list1} />
                </Box>
                <Box
                sx={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                }}
                >
                    <StatsList list={list2} />
                </Box>
                <Box
                sx={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                }}
                >
                    <StatsList list={list3} />
                </Box>
                <Box
                sx={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                }}
                >
                    <StatsList list={list4} />
                </Box>
            </Box>
            <Box
                sx={{
                    m: "1.5rem"
                }}
                >
                    <StatsList list={list5} />
                </Box>
        </Box>
    
    ); 
}

export default ActivityPageBottomStats;