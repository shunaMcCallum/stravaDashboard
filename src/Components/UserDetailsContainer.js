import React from "react";
import UserDetailsList from "./UserDetailsList";

const UserDetailsContainer = ({userDetails}) => {

    return(

    <div>
        <h3>User Details Container</h3>
        <UserDetailsList userDetails={userDetails}/>
    </div>

    );
    
}

export default UserDetailsContainer;