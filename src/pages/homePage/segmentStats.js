import React from "react";
import { Box } from "@mui/material";
import LineChart2 from "../../components/charts/lineChart/lineChart2";

const SegmentStats = ({alpeDuZwiftEfforts}) => {

    const alpes = []

    const setAlpeDuZwiftData = () => {
        for(var alpe of alpeDuZwiftEfforts) {
                
                var array = alpe.ElapsedTime.split(":");
                var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

                        alpes.push({
                             Date: alpe.Date,
                             Time: seconds
                        })
                }
        };

    setAlpeDuZwiftData();

    return(
    <Box
        sx={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "100%",
            marginTop: "1.5rem",
            paddingBottom: "2rem"
        }}
    >
        <Box
            sx={{
                height: "20.1rem",
                width: "90%",
                backgroundColor:"#332240",
                boxShadow:"0rem 0.15rem 1.5rem black",
                padding:"0.5rem 1rem 0.5rem -0.5rem",
                overflow: "auto",
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
                '&:hover::-webkit-scrollbar': {
                    display: 'block',
                    },
                '&::-webkit-scrollbar': {
                    // display: 'none',
                    width: '0.512rem',
                    },
                '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 2rem rgba(0,0,0,0.00)',
                    webkitBoxShadow: 'inset 0 0 2rem rgba(0,0,0,0.00)',
                    },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#8d8e90',
                    height: '2rem',
                    borderRadius: '1rem',
                    },
                
            }}
        >
            <LineChart2 header={"Alpe Du Zwift Segment Times"} data={alpes} chartWidth={2500} />
        </Box>
    </Box>
    );
}

export default SegmentStats;