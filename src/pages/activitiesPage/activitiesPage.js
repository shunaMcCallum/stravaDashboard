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

    let columns = columnValues.map((x, i) => {
        if (x[0] == "StressScore") {
            console.log(x[1])
            return {
                field: x[0],
                //type: typeof(x[1]),
                type: 'number',
                headerAlign: "left",
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
        } else {
            return {
                field: x[0],
                type: typeof(x[1]),
                headerAlign: "left"
            }   
        }
    })
    

    return(
        <div id="activities-page-header-container">
            <SectionHeader text={text} />
            <ActivitiesPageGrid columns={columns} rowData={activitiesList} />
        </div>
    );
}

export default ActivitiesPage;