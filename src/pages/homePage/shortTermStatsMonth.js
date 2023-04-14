import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import Filter from "../../components/lists/filter";
import BarChart2 from "../../components/charts/barChart/barChart2";


const ShortTermStatsMonth = ({thisMonthStatList, lastMonthStatList, filters, handleListSelectThisMonth, handleListSelectLastMonth, thisMonth, lastMonth}) => {

    return(
    <Box
        sx={{

        }}>
        {/* Stats Boxes */}
        <Box
            sx={{
                display: "flex",
                justifyContent: "center"
            }}>
          <StatsList list={thisMonthStatList} listTitle={"This Month Stats"}/>
          <StatsList list={lastMonthStatList} listTitle={"Last Month Stats"}/>
        </Box>
        {/* Graphs */}
        <Box 
            sx={{ 
                
            }}>
            <Box>
                <Box>
                    <h3>Filter Data</h3>
                    <Filter list={filters} handleListSelect={handleListSelectThisMonth} />
                </Box>
                <BarChart2 header={"This Month Activities"} data={thisMonth} chartWidth={1000} />
            </Box>
            <Box>
                <Box>
                    <h3>Filter Data</h3>
                    <Filter list={filters} handleListSelect={handleListSelectLastMonth} />
                </Box>
                <BarChart2 header={"Last Month Activities"} data={lastMonth} chartWidth={1000} />
            </Box>
        </Box>
    </Box>
    );

}

export default ShortTermStatsMonth;