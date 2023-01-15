import React from "react";
import SectionHeader from '../Components/Headers/SectionHeader.js';
import ListContainer from "../Components/Lists/ListContainer.js";
import StatsChartsContainer from '../PageComponents/StatsChartsContainer.js';

const HomeContainer = ({userDetails, userStats}) => {

    const text = `Welcome, ${userDetails.Firstname}!`;

    const headlineTitle = 'Current Statistics';
    const headlineList = [`FTP: ${userDetails.Ftp}W`, `Weight: ${userDetails.Weight}kg`, `Account Created: ${userDetails.AccountCreatedAt}`]

    return(

    <div>
        <SectionHeader text={text} />
        <ListContainer title={headlineTitle} list={headlineList}/>
        <StatsChartsContainer userStats={userStats}/>
    </div>
    
    );
    
}

export default HomeContainer;