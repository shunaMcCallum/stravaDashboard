import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import SectionHeader from "../../components/headers/sectionHeader";
import StatsListSmall from "../../components/lists/statsListSmall";

const OverallStats = ({userDetails}) => {

    const text = `Welcome, ${userDetails.Firstname}!`;
    const headlineTitle = 'Current Statistics';
    const ftp = ["FTP: 207W"]
    const weight = [`Weight: ${userDetails.Weight}kg`]
    const accCreated = [`Account Created: ${userDetails.AccountCreatedAt}`]

    return(
      <Box
      sx={{
        display:"flex",
        justifyContent:"space-evenly",
        m:"1.5rem auto 0 auto",
        width:"98%"
      }}
      >
        <Box>
            <SectionHeader text={text} />
        </Box>
        <Box>
            <StatsListSmall list={ftp} />
        </Box>
        <Box>
            <StatsListSmall list={weight} />
        </Box>
        <Box>
            <StatsListSmall list={accCreated} />
        </Box>
      </Box>

    );

}

export default OverallStats;