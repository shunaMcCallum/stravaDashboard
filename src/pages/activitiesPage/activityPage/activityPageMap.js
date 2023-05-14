import React from "react";
import { Box } from "@mui/material";
import Map from "../../../components/maps/map";

const ActivityPageMap = ({pol}) => {

    return(
        <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}
            >
                <Map polyline={pol} />
            </Box>
    
    ); 
}

export default ActivityPageMap;