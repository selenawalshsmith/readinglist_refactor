import React from 'react';
//import setAuthToken from "./setAuthToken";
import { useHistory } from 'react-router-dom';
import "../App.css";

function LogoutUser(){
  const history = useHistory();
  const redirectToLogin = () => {
    console.log("hellow");
    history.push("/login")
    /*
    if (localStorage.jwtToken) {
      localStorage.removeItem("jwtToken");
      setAuthToken(false);
      //this.setState({redirect: "/login"});
      //history.push("/login");
    } else {
      console.log("hellow");
      return;
    }
    */

  }
  return (
    <a className="NavItem" onClick={redirectToLogin}>Logout</a>
  )
}

export default LogoutUser;
