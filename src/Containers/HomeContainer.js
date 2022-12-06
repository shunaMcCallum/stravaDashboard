import React from "react";
import UserDetailsContainer from '../Components/UserDetailsContainer.js'

const HomeContainer = ({userDetails}) => {

    return(

    <div>
        <UserDetailsContainer userDetails={userDetails}/>
    </div>
    
    );
    
}

export default HomeContainer;