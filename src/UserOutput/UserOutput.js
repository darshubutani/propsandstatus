import React from "react";

const userOutput = (props) => {
    return (
        <div>
            <p>Username : {props.userName}</p>
            <p> You are going to be modified!</p>
        </div>
    );

}

export default userOutput;