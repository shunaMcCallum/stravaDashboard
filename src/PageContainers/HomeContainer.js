import React from "react";
import SectionHeader from '../Components/Headers/SectionHeader.js';
import StatsList from '../Components/Lists/StatsList.js';
import StatsChartsContainer from '../PageComponents/StatsChartsContainer.js';

const HomeContainer = ({userDetails, userStats}) => {

    const text = `Welcome, ${userDetails.Firstname}!`;

    const title = 'Current Statistics';
    const list = [`FTP: ${userDetails.Ftp}W`, `Weight: ${userDetails.Weight}kg`, `Account Created: ${userDetails.AccountCreatedAt}`]

    return(

    <div>
        <SectionHeader text={text} />
        <StatsList title={title} list={list}/>
        <StatsChartsContainer />
    </div>
    
    );
    
}

export default HomeContainer;