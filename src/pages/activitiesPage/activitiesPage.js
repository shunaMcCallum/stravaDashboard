import React, { useState, useEffect } from "react";
import SectionHeader from "../../components/headers/sectionHeader";
import ActivitiesPageGrid from "./activitiesPageGrid";
import "../../Styling/ActivitiesPageHeader.css";

const ActivitiesPage = ({activitiesList, activityHeaders}) => {

    const text = "Activities List"

    let columnHeaders = Object.keys(activityHeaders).map((x, i) => {
        return {field: x};
    });
    

    return(
        <div id="activities-page-header-container">
            <SectionHeader text={text} />
            <ActivitiesPageGrid columnHeaders={columnHeaders} rowData={activitiesList} />
        </div>
    );
}

export default ActivitiesPage;