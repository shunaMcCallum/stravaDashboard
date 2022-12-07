import React from "react";
// import UserDetailsContainer from '../Components/UserDetailsContainer.js'
import SectionHeader from '../Components/Headers/SectionHeader.js';
import StatsList from '../Components/Lists/StatsList.js';

const HomeContainer = ({userDetails}) => {

    const text = `Welcome, ${userDetails.Firstname}!`;

    const title = 'Current Statistics';
    const list = [`FTP: ${userDetails.Ftp}W`, `Weight: ${userDetails.Weight}`, `Account Created: ${userDetails.AccountCreatedAt}`]

    return(

    <div>
        {/* <UserDetailsContainer userDetails={userDetails}/> */}
        <SectionHeader text={text} />
        <StatsList title={title} list={list}/>
    </div>
    
    );
    
}

export default HomeContainer;