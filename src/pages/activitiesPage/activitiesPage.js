import React from "react";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import ActivitiesPageGrid from "./activitiesPageGrid";
import ColourCodeBox from "../../components/dataGridFeatures/colourCodeBox";

const ActivitiesPage = ({activitiesList, activityHeaders}) => {

    // get column headers by tunring activityheaders object into list
    let columnValues = Object.entries(activityHeaders);

    // loop through the column headers and implement specific formatting for each column where relevant
    let columns = columnValues.map((x, i) => {
        // certain columns will contain colour coded boxes to display their data, indicating how hard the workout was
        // to implement custom formatting for a cell, renderCell is used - the data displayed in that cell can then be passed as
        // parameters to a custom component which will render in a particular way depending on the value of the parameter
        // in this case we have created a custom component called ColourCodeBox
        if (x[0] === "StressScore") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={110} mediumBottom={90} mediumTop={109} lowBottom={70} lowTop={89} />
            }
        } else if (x[0] === "AvgHeartRate") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={140} mediumBottom={130} mediumTop={139} lowBottom={120} lowTop={129} />      
            }
        } else if (x[0] === "MaxHeartRate") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={160} mediumBottom={150} mediumTop={159} lowBottom={140} lowTop={149} />         
            }
        } else if (x[0] === "MaxWatts") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={250} mediumBottom={220} mediumTop={249} lowBottom={200} lowTop={219} />            
            }
        } else if (x[0] === "AvgPower") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                renderCell: (params) => <ColourCodeBox params={params} high={160} mediumBottom={150} mediumTop={159} lowBottom={140} lowTop={149} />          
            }
        } else if (x[0] === "AvgCadence"){
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                // here, where there is no cadence recorded with the activity the column will display a blank - however I want to
                // display -- instead, so again I use renderCell to say if this parameter is null, give me back a box with -- inside
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
        } else if (x[0] === "Name") {
            return {
                field: x[0],
                headerAlign: "left",
                align: "left",
                flex: 2,
                // here, in the column showing the name of the activity, I want the name to act as a link to the individual activity page
                // so again I use renderCell to generate a Link which leads to the route I have created for viewing individuak activities
                renderCell: (params) => <Link to={`/activities/${params.id}`} style={{ color: '#FFF' }}>{params.value}</Link>
            }
        } else if (x[0] === "Notes") {
            return {
                // the "editable" property of the Notes column is set to true so that data can be entered into there and saved to the database
                field: x[0],
                headerAlign: "left",
                align: "left",
                flex: 1,
                editable: true,
            }
        }
        // all columns not specified above are rendered as per this else statement
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