import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import Filter from "../../components/lists/filter";
import BarChart2 from "../../components/charts/barChart/barChart2";


const ShortTermStatsWeek = ({thisWeekStatList, lastWeekStatList, filters, handleListSelectThisWeek, handleListSelectLastWeek, thisWeek, lastWeek}) => {

    return(
    <Box
        sx={{
            // borderColor: "red",
            // borderWidth: "2px",
            // borderStyle: "solid",
            width: "50%"
        }}
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
                marginTop: "1.5rem",
                marginLeft: "1.5rem"
            }}
        >
            <Box
                sx={{
                    width: "97%",
                    padding:"0.5rem 1rem 0.5rem -0.5rem",
                    backgroundColor:"#332240",
                    boxShadow:"0rem 0.15rem 1.5rem black"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: "4rem",
                        marginRight: "2rem"
                    }}
                >
                    <Typography 
                        variant="h5"
                        lineHeight="2"
                    >
                        This Week Activities
                    </Typography>
                    <Filter list={filters} handleListSelect={handleListSelectThisWeek} />
                </Box>
                <BarChart2 data={thisWeek} chartWidth={700} />
            </Box>
            <Box
                sx={{
                    width: "97%",
                    marginTop: "1.5rem",
                    padding:"0.5rem 1rem 0.5rem -0.5rem",
                    backgroundColor:"#332240",
                    boxShadow:"0rem 0.15rem 1.5rem black"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: "4rem",
                        marginRight: "2rem"
                    }}
                >
                    <Typography 
                        variant="h5"
                        lineHeight="2"
                    >
                        Last Week Activities
                    </Typography>
                    <Filter list={filters} handleListSelect={handleListSelectLastWeek} />
                </Box>
                <BarChart2 data={lastWeek} chartWidth={700} />
            </Box>
        </Box>
    </Box>
    );

}

export default ShortTermStatsWeek;