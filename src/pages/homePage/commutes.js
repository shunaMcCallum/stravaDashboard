import React from "react";
import { Box } from "@mui/material";
import LineChart2 from "../../components/charts/lineChart/lineChart2";

const Commutes = ({activities}) => {

    const morningCommutes = []
    const afternoonCommutes = []

    const setMorningData = () => {
        for(var activity of activities) {
                if (activity.RideType = "Commute" && activity.Name === "Morning Ride") {
                
                var array = activity.ElapsedTime.split(":");
                var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

                        morningCommutes.push({
                             Date: activity.Date,
                             Time: seconds
                        })
                }
        }
    };

    const setAfternoonData = () => {
        for(var activity of activities) {
                if (activity.RideType === "Commute" && activity.Name === "Afternoon Ride" || activity.Name === "Evening Ride") {
                
                var array = activity.ElapsedTime.split(":");
                var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)

                        afternoonCommutes.push({
                             Date: activity.Date,
                             Time: seconds
                        })
                }
        }
    };

    setMorningData();
    setAfternoonData();

    return(
    <Box
        sx={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "100%",
            marginTop: "1.5rem",
        }}
    >
        <Box
            sx={{
                height: "20.1rem",
                width: "47%",
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
            <LineChart2 header={"Morning Commute Times"} data={morningCommutes} chartWidth={8000} />
        </Box>
        <Box
            sx={{
                height: "20.1rem",
                width: "47%",
                backgroundColor:"#332240",
                boxShadow:"0rem 0.15rem 1.5rem black",
                padding:"0.5rem 1rem 0.5rem -0.5rem",
                overflow: "auto",
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
                marginBottom: "0rem",
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
                    height: '3rem',
                    borderRadius: '1rem',
                    },
            }}
        >
            <LineChart2 header={"Afternoon Commute Times"} data={afternoonCommutes} chartWidth={8000} />
        </Box>
    </Box>
    );
}

export default Commutes;