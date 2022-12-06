import React from "react";
import UserDetailsList from "./UserDetailsList";

const UserDetailsContainer = ({userDetails}) => {

    return(

    <div>
        <UserDetailsList userDetails={userDetails}/>
    </div>

    );
    
}

export default UserDetailsContainer;