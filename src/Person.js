import React from "react";
const Person = (props) => {
    return (
        <div>
            <p>I am a {props.name} and {props.age} yers old.</p>
            <p><small>{props.children}</small></p>
        </div>
    )
};
export default Person;