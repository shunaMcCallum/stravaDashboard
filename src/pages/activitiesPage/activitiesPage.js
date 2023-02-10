import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import SectionHeader from "../../components/headers/sectionHeader";
import ActivitiesPageGrid from "./activitiesPageGrid";
import "../../Styling/ActivitiesPageHeader.css";

const ActivitiesPage = ({activitiesList, activityHeaders}) => {

    const text = "Activities List"

    // let columnHeaders = Object.keys(activityHeaders).map((x, i) => {
    //     return {field: x};
    // });

    let columnValues = Object.entries(activityHeaders);

    let columns = columnValues.map((x, i) => {
        if (x[0] == "elapsed_time") {
            return {
                field: x[0],
                type: typeof(x[1]),
                cellClassName: (params) => {
                    if (params.value == null) {
                        return '';
                    }
                    return clsx("suffer-score", {
                        high: params.value >= 2000,
                        medium: params.value >= 1500 && params.value <= 1999,
                        low: params.value >= 1000 && params.value <= 1499
                    })
                }       
            }
        } else {
            return {
                field: x[0],
                type: typeof(x[1])    
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