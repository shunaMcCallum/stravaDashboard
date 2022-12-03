import React from "react";

const UserDetailsList = ({userDetails}) => {

    return(

    <div>

    <p>User Id: {userDetails.userId}</p>    
    <p>Username: {userDetails.username}</p>
    <p>First name: {userDetails.firstname}</p>
    <p>Last name: {userDetails.lastname}</p>
    <p>Weight: {userDetails.weight}kg</p>
    <p>Account created: {userDetails.AccountCreatedAt}</p>

    </div>
    
    );
    
}

export default UserDetailsList;