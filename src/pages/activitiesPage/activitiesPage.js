import {Box} from "@mui/material";
import clsx from 'clsx';
import SectionHeader from "../../components/headers/sectionHeader";
import ActivitiesPageGrid from "./activitiesPageGrid";
import "../../Styling/ActivitiesPage.css";

const ActivitiesPage = ({activitiesList, activityHeaders}) => {

    const text = "Activities List"

    // let columns = Object.keys(activityHeaders).map((x, i) => {
    //     return {field: x};
    // });

    let columnValues = Object.entries(activityHeaders);

    const handleSubmit = async () => {

    }

    let columns = columnValues.map((x, i) => {
        if (x[0] == "StressScore") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                cellClassName: (params) => {
                    if (params.value == null) {
                        return '';
                    }
                    return clsx("suffer-score", {
                        high: parseInt(params.value) >= 110,
                        medium: parseInt(params.value) >= 90 && params.value <= 109,
                        low: parseInt(params.value) >= 70 && params.value <= 89
                    })
                }       
            }
        } else if (x[0] == "AvgHeartRate") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                cellClassName: (params) => {
                    if (params.value == null) {
                        return '';
                    }
                    return clsx("avg-heart-rate", {
                        high: parseInt(params.value) >= 140,
                        medium: parseInt(params.value) >= 130 && params.value <= 139,
                        low: parseInt(params.value) >= 120 && params.value <= 129
                    })
                }       
            }
        } else if (x[0] == "MaxHeartRate") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                cellClassName: (params) => {
                    if (params.value == null) {
                        return '';
                    }
                    return clsx("max-heart-rate", {
                        high: parseInt(params.value) >= 160,
                        medium: parseInt(params.value) >= 150 && params.value <= 159,
                        low: parseInt(params.value) >= 140 && params.value <= 149
                    })
                }       
            }
        } else if (x[0] == "MaxWatts") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                cellClassName: (params) => {
                    if (params.value == null) {
                        return '';
                    }
                    return clsx("max-watts", {
                        high: parseInt(params.value) >= 250,
                        medium: parseInt(params.value) >= 220 && params.value <= 249,
                        low: parseInt(params.value) >= 200 && params.value <= 219
                    })
                }       
            }
        } else if (x[0] == "AvgPower") {
            return {
                field: x[0],
                type: 'number',
                headerAlign: "left",
                align: "left",
                flex: 0.5,
                cellClassName: (params) => {
                    if (params.value == null) {
                        return '';
                    }
                    return clsx("avg-power", {
                        high: parseInt(params.value) >= 160,
                        medium: parseInt(params.value) >= 150 && params.value <= 159,
                        low: parseInt(params.value) >= 140 && params.value <= 149
                    })
                }       
            }
        } else if (x[0] == "Name") {
            return {
                field: x[0],
                headerAlign: "left",
                align: "left",
                flex: 2
            }
        } else if (x[0] == "Notes") {
            return {
                field: x[0],
                headerAlign: "left",
                align: "left",
                flex: 1,
                editable: true,
                //onsubmit: handleSubmit(),
                onCellEditCommit: (params) => {handleSubmit(params.id)}
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
        <div id="activities-page-container">
            {/* <SectionHeader text={text} /> */}
            <ActivitiesPageGrid columns={columns} rowData={activitiesList} />
        </div>
    );
}

export default ActivitiesPage;