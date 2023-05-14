import React from "react";
import {Box} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LineChart3 from "../../../components/charts/lineChart/lineChart3";

const ActivityPageLineGraph = ({stats, pwrChecked, hrChecked, cadenceChecked, distanceChecked, handlePowerChange, handleHeartRateChange, handleCadenceChange, handleDistanceChange}) => {

    return(
        <Box
            sx={{
                height: "22rem",
                backgroundColor:"#332240",
                boxShadow:"0rem 0.15rem 1.5rem black",
                padding:"0.5rem 1rem 0.5rem -0.5rem",
                overflow: "auto",
                marginTop: "1.5rem",
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
                marginBottom: "0rem",
                '&:hover::-webkit-scrollbar': {
                    display: 'block',
                    },
                '&::-webkit-scrollbar': {
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
                <Box 
                sx={{
                    display: "flex",
                    marginLeft: "3.5rem"
                }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Power" onChange={handlePowerChange} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Heart Rate" onChange={handleHeartRateChange} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadence" onChange={handleCadenceChange} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Distance" onChange={handleDistanceChange} />
                </Box>
                <LineChart3 header={"Performance Stats"} data={stats} chartWidth={1400} pwrChecked={pwrChecked} hrChecked={hrChecked} cadenceChecked={cadenceChecked} distanceChecked={distanceChecked} />
            </Box>
    );
}

export default ActivityPageLineGraph;