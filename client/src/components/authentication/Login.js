import React, {Component}  from 'react';
//import classnames from "classnames";
//import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import axios from "axios";
//import setAuthToken from "../../actions/setAuthToken";
import jwt_decode from "jwt-decode";
import "../../App.css";

class Login extends Component{
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      errors: {},
      error: ""
    };
  }
  /*
  componentDidMount(){
    axios.get("/api/users/login").then((res) => {
      if(res.data.length >0){
        console.log(res);
      }
    })
  }
  */
  setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
  setCurrentUser = (userEmail, history) => {
    //this.state
    //loginUser(this.state, decoded)
    //history.push("/user/"+decoded.name);
    //console.log(userEmail);

    history.push({
      //pathname: "/user/"+decoded.name,
      pathname: "/",
      state: { user: userEmail}
    });
  }
  loginUser = (userData, history) => {
    axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      console.log(res);
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
       this.setAuthToken(token);
       //Decode token to get user data
      const decoded = jwt_decode(token);
       //Set current user
       console.log(decoded);
       //console.log(userData);
       this.setCurrentUser(decoded.email, history);
      //dispatch(setCurrentUser(decoded));
      //history.push("/user");
    })
    .catch(err => {
      //console.dir(err.response.data);
      console.log(err);
      this.setState({error: "Wrong Email. Please try again."})
      //this.state.errors = err.response.data;
      //const i =1;
      /*
      Object.entries(this.state.errors).map((obj,i)=> {
        console.log(obj[1]);
        this.setState((state) => {
          return{error: obj[1]}
        });
      })
      */
    }
   );
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.loginUser(userData, this.props.history);
  }
  render(){
    return(
      <div>
      <div className="AuthContainer">
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <h3>{this.state.error}</h3>
        </div>
        <form onSubmit={this.onSubmit}>
          <div>
          <input
            placeholder="email"
            id="email"
            onChange={this.onChange}
          ></input>
          </div>
          <div>
            <input placeholder="password" id="password" onChange={this.onChange}></input>
          </div>
          <div>
            <button type="submit" className="btn">Submit</button>
          </div>
          </form>
          <div>
            <h4>Need an account?</h4>
            <div>
            <Link to="./register"><button className="btn"><h4>Register</h4></button></Link>
            </div>
          </div>
          </div>
      </div>
    )
  }
};

export default Login;
