import React from "react";
import { Box, Typography } from "@mui/material";

const StatsList = ({list, listTitle}) => {

    const listItems = list.map((item) => {
        return(
            <p>{item}</p>
        )
    })

    return(
        <Box 
            sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
              minWidth:"21rem",
              padding:"1rem 0.5rem 0.5rem 0",
              backgroundColor:"#332240",
              boxShadow:"0rem 0.15rem 1.5rem black"
            }}
            >
              <Typography 
                variant="h5"
                lineHeight="1"
                >
                {listTitle}
              </Typography>
              <Typography 
                variant="h7"
                lineHeight="1"
                >
               {listItems}
              </Typography>
      </Box>
    );
}

export default StatsList;