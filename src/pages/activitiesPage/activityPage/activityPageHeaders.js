import React, {useState, useEffect} from "react";
import {Box} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'react-router-dom';
import SectionHeaderSubHeader from "../../../components/headers/sectionHeaderSubHeader";

const ActivityPageHeaders = ({activity}) => {

    return(
        <Box>
            <SectionHeaderSubHeader header={activity.Name} subheader={activity.RideType} />
        </Box>
    );
}

export default ActivityPageHeaders;