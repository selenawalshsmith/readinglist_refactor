import React, {Component}  from 'react';
import { Link, Redirect } from 'react-router-dom';
import setAuthToken from "../../actions/setAuthToken";
import { useHistory } from 'react-router-dom';
import LogoutUser from '../LogoutUser.js'
import "../../App.css";
//import { Link } from 'react-router-dom'; //add links for pages
/*
<Link to={{pathname:"/explore", state:{user: this.state.user}}}><button>Explore</button></Link>
<Link to={{pathname:"/explore", state:{user: this.state.user}}}><button>Explore</button></Link>
*/
class Nav extends Component{
  constructor(props) {
    super(props);
    //this.state= {
    //  redirect: null
    //}
  }


  render(){
    return (
      <div>
        <header style={headerStyle}>
          <div className="NavItemContainer">
          <ul>
            <li>
              <Link to='/'>
                <h1>Reading List</h1>
              </Link>
            </li>

            <li>
            <Link to='/register'><a className="NavItem">Register</a></Link>
            </li>
            <li>
            <Link to='/login'><a className="NavItem">Login</a></Link>
            </li>
            <li>
            <LogoutUser/>
            </li>
            <li>
            <Link to="/explore"><a className="NavItem">Explore</a></Link>
            </li>
            <li>
            <Link to="/"><a className="NavItem">Home</a></Link>
            </li>
          </ul>
          </div>
        </header>
      </div>
    )
  }
}
const headerStyle ={
  background: "#C6E4EE",
  color: '#C6E4EE',
  textAlign: 'left',
  padding: '10px',
  fontSize: '25px',
  width: '100%'
}
const buttonStyle ={

}
export default Nav;
