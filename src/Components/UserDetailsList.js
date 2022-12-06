import React from "react";

const UserDetailsList = ({userDetails}) => {


    return(

    <div>
    {console.log(userDetails)}
    <p>User Id: {userDetails.UserId}</p>    
    <p>Username: {userDetails.Username}</p>
    <p>First name: {userDetails.Firstname}</p>
    <p>Last name: {userDetails.Lastname}</p>
    <p>FTP: {userDetails.Ftp}</p>
    <p>Weight: {userDetails.Weight}kg</p>
    <p>Account created: {userDetails.AccountCreatedAt}</p>

    </div>
    
    );
    
}

export default UserDetailsList;