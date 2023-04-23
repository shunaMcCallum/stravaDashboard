import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import ActivitiesPageGrid from "./activitiesPageGrid";
import ColourCodeBox from "../../components/dataGridFeatures/colourCodeBox";

const ActivitiesPage = ({activitiesList, activityHeaders}) => {

    let columnValues = Object.entries(activityHeaders);

    let columns = columnValues.map((x, i) => {
        if (x[0] == "StressScore") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={110} mediumBottom={90} mediumTop={109} lowBottom={70} lowTop={89} />
            }
        } else if (x[0] == "AvgHeartRate") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={140} mediumBottom={130} mediumTop={139} lowBottom={120} lowTop={129} />      
            }
        } else if (x[0] == "MaxHeartRate") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={160} mediumBottom={150} mediumTop={159} lowBottom={140} lowTop={149} />         
            }
        } else if (x[0] == "MaxWatts") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={250} mediumBottom={220} mediumTop={249} lowBottom={200} lowTop={219} />            
            }
        } else if (x[0] == "AvgPower") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={160} mediumBottom={150} mediumTop={159} lowBottom={140} lowTop={149} />          
            }
        } else if (x[0] == "AvgCadence"){
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => {
                    if (params.value === null) {
                        return <Box 
                        sx={{            
                        height: "1.8rem",
                        width: "5.5rem",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}
                        >{'---'}
                        </Box>
                    } else {
                        return <Box 
                        sx={{            
                        height: "1.8rem",
                        width: "5.5rem",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}
                        >{params.value}
                        </Box>
                    }
                }
            }
        } else if (x[0] == "Name") {
            return {
                field: x[0],
                headerAlign: "left",
                align: "left",
                flex: 2,
                renderCell: (params) => <Link to={`/activities/${params.id}`}>{params.value}</Link>
            }
        } else if (x[0] == "Notes") {
            return {
                field: x[0],
                headerAlign: "left",
                align: "left",
                flex: 1,
                editable: true,
            }
        }
        else {
            return {
                field: x[0],
                type: typeof(x[1]),
                headerAlign: "left",
                align: "left",
                flex: 0.5,
            }   
        }
    })  

    return(
        <Box sx={{height: '90%'}}>
            <ActivitiesPageGrid columns={columns} rowData={activitiesList} />
        </Box>
    );
}

export default ActivitiesPage;