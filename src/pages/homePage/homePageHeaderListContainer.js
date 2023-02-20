import React from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
//import '../../Styling/HomePageHeaderListContainer.css';

const HomePageHeaderListContainer = ({title, list}) => {

    const placeholderList = ["Stat1: Stat", "Stat2: Stat", "Stat3: Stat"]
    const placeholderHeader = "Stat Header"

    return(
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
      //gridAutoRows="140px"
        gap="0.9rem"
        justifyContent={"center"}
        m="1.5rem auto 0 auto"
        width="98%"
      >
        <StatsList list={list} listTitle={title}/>
        <StatsList list={placeholderList} listTitle={placeholderHeader}/>
        <StatsList list={placeholderList} listTitle={placeholderHeader}/>
        <StatsList list={placeholderList} listTitle={placeholderHeader}/>
      </Box>
        
    );
    
}

export default HomePageHeaderListContainer;