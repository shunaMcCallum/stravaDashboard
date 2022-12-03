import React from "react";
import UserDetailsContainer from '../Components/UserDetailsContainer.js'

const HomeContainer = ({userDetails}) => {

    return(

    <div>
        <h2>USER DETAILS</h2>
        <UserDetailsContainer userDetails={userDetails}/>
    </div>
    
    );
    
}

export default HomeContainer;