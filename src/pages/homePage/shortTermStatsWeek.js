import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import Filter from "../../components/lists/filter";
import BarChart2 from "../../components/charts/barChart/barChart2";


const ShortTermStatsWeek = ({thisWeekStatList, lastWeekStatList, filters, handleListSelectThisWeek, handleListSelectLastWeek, thisWeek, lastWeek}) => {

    return(
    <Box>
        {/* Stats Boxes */}
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-evenly"
            }}
            >
          <StatsList list={thisWeekStatList} listTitle={"This Week Stats"}/>
          <StatsList list={lastWeekStatList} listTitle={"Last Week Stats"}/>
        </Box>
        {/* Graphs */}
        <Box 
            sx={{ 
                
            }}>
            <Box>
                <Box>
                    <h3>Filter Data</h3>
                    <Filter list={filters} handleListSelect={handleListSelectThisWeek} />
                </Box>
                <BarChart2 header={"This Week Activities"} data={thisWeek} chartWidth={1000} />
            </Box>
            <Box>
                <Box>
                    <h3>Filter Data</h3>
                    <Filter list={filters} handleListSelect={handleListSelectLastWeek} />
                </Box>
                <BarChart2 header={"Last Week Activities"} data={lastWeek} chartWidth={1000} />
            </Box>
        </Box>
    </Box>
    );

}

export default ShortTermStatsWeek;