import React, {Component, KeyboardEvent} from 'react';
import Nav from "./components/layout/Nav";
import Explore from "./components/Explore";
import Book from "./components/Book";
import UserHome from "./components/UserHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";

//import setAuthToken from "./actions/setAuthToken";
import jwt_decode from "jwt-decode";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
          <Route path="/" exact component={UserHome}/>
          <Route path="/explore" exact component={Explore}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          {/* <Route path="/book" component={Book}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
