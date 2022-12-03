import React from "react";

const UserDetailsList = ({userDetails}) => {

    return(

    <div>
        {console.log(userDetails)}
    <p>User Id: {userDetails.id}</p>    
    <p>Username: {userDetails.username}</p>
    <p>First name: {userDetails.firstname}</p>
    <p>Last name: {userDetails.lastname}</p>
    <p>FTP: {userDetails.ftp}</p>
    <p>Weight: {userDetails.weight}kg</p>
    <p>Account created: {userDetails.created_at}</p>

    </div>
    
    );
    
}

export default UserDetailsList;