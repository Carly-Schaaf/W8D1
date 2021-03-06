import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  if (props.currentUser) {
    return(
      <div>
        <h1>Welcome, {props.currentUser.username}</h1>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return(
      <div>
        <Link to={"/signup"}>Sign Up</Link>
        <br></br>
        <Link to={"/login"}>Login</Link>
      </div>
    );
  }
};

export default Greeting;
