import React from "react";
import SectionHeader from '../Components/Headers/SectionHeader.js';
import HomePageHeaderListContainer from "../PageComponents/HomePageHeaderListContainer.js";
import StatsChartsContainer from '../PageComponents/StatsChartsContainer.js';

const HomeContainer = ({userDetails, userStats}) => {

    const text = `Welcome, ${userDetails.Firstname}!`;

    const headlineTitle = 'Current Statistics';
    const headlineList = [`FTP: ${userDetails.Ftp}W`, `Weight: ${userDetails.Weight}kg`, `Account Created: ${userDetails.AccountCreatedAt}`]
    
    return(
    <div id="homepage-container">
        <SectionHeader text={text} />
        <HomePageHeaderListContainer title={headlineTitle} list={headlineList}/>
        <StatsChartsContainer userStats={userStats}/>
    </div>
    
    );
    
}

export default HomeContainer;