import React from "react";
import SectionHeader from '../../components/headers/sectionHeader.jsx';
import HomePageHeaderListContainer from "./homePageHeaderListContainer.jsx";
import HomeStatsChartsContainer from './homeStatsChartsContainer.jsx';

const HomePage = ({userDetails, userStats}) => {

    const text = `Welcome, ${userDetails.Firstname}!`;

    const headlineTitle = 'Current Statistics';
    const headlineList = [`FTP: ${userDetails.Ftp}W`, `Weight: ${userDetails.Weight}kg`, `Account Created: ${userDetails.AccountCreatedAt}`]
    
    return(
    <div id="homepage-container">
        <SectionHeader text={text} />
        <HomePageHeaderListContainer title={headlineTitle} list={headlineList}/>
        <HomeStatsChartsContainer userStats={userStats}/>
    </div>
    
    );
    
}

export default HomePage;