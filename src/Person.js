import React from "react";
// const Person = (props) => {
//     return (
//         <div>
//             <p>I am a {props.name} and {props.age} yers old.</p>
//             <p><small>{props.children}</small></p>
//         </div>
//     )
// };
// export default Person;


function Comment(props) {

    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               alt = '' src={props.avatarUrl} />
          <div className="UserInfo-name">
            {props.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>     
      </div>
    );
    

  }
 export default Comment;