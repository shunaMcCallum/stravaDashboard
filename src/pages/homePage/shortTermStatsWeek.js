import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import Filter from "../../components/lists/filter";
import BarChart2 from "../../components/charts/barChart/barChart2";


const ShortTermStatsWeek = ({thisWeekStatList, lastWeekStatList, filters, handleListSelectThisWeek, handleListSelectLastWeek, thisWeek, lastWeek}) => {

    return(
    <Box
        // sx={{
        //     borderColor: "red",
        //     borderWidth: "2px",
        //     borderStyle: "solid"
        // }}
    >
        {/* Stats Boxes */}
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
            >
            <Box
                sx={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem"
                }}
            >
                <StatsList list={thisWeekStatList} listTitle={"This Week Stats"}/>
            </Box>
            <Box
                sx={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem"
                }}
            >
                <StatsList list={lastWeekStatList} listTitle={"Last Week Stats"}/>
            </Box>
        </Box>
        {/* Graphs */}
        <Box 
            sx={{ 
                // borderColor: "red",
                // borderWidth: "2px",
                // borderStyle: "solid"
            }}>
            <Box>
                <Box>
                    <h3>Filter Data</h3>
                    <Filter list={filters} handleListSelect={handleListSelectThisWeek} />
                </Box>
                <BarChart2 header={"This Week Activities"} data={thisWeek} chartWidth={740} />
            </Box>
            <Box>
                <Box>
                    <h3>Filter Data</h3>
                    <Filter list={filters} handleListSelect={handleListSelectLastWeek} />
                </Box>
                <BarChart2 header={"Last Week Activities"} data={lastWeek} chartWidth={740} />
            </Box>
        </Box>
    </Box>
    );

}

export default ShortTermStatsWeek;