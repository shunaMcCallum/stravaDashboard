import React from "react";
import { Box, Typography } from "@mui/material";

const StatsListSmall = ({list, listTitle}) => {

    const listItems = list.map((item, index) => {
        return(
            <p key={index}>{item}</p>
        )
    })

    return(
        <Box
            sx={{
                m: "auto",
                padding:"1rem 0.5rem 0.5rem 0",
                minWidth: "20rem",
                height: "3.5rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#332240",
                boxShadow: "0rem 0.15rem 1.5rem black",
            }} 
            >
              <Typography 
                variant="h6"
                lineHeight="1"
                >
               {listItems}
              </Typography>
      </Box>
    );
}

export default StatsListSmall;