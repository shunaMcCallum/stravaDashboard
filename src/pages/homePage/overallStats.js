import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "../../components/headers/sectionHeader";
import StatsListSmall from "../../components/lists/statsListSmall";

const OverallStats = ({userDetails}) => {

    // declare static variables for displaying basic user data - each variable is fed through to one of our custom components below
    const text = `Welcome, ${userDetails.Firstname}!`;
    const ftp = ["Current FTP: 207W"]
    const weight = [`Current Weight: ${userDetails.Weight}kg`]
    const accCreated = [`Account Created: ${userDetails.AccountCreatedAt}`]

    return(
      <Box
      sx={{
        display:"flex",
        justifyContent:"space-evenly",
        m:"1.5rem 1rem 1.5rem 1rem",
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