import React, {Component}  from 'react';
import { Link} from 'react-router-dom';
import LogoutUser from '../LogoutUser.js'
import "../../App.css";
//import { Link } from 'react-router-dom'; //add links for pages
/*
<Link to={{pathname:"/explore", state:{user: this.state.user}}}><button>Explore</button></Link>
<Link to={{pathname:"/explore", state:{user: this.state.user}}}><button>Explore</button></Link>
*/
class Nav extends Component{
  hideItems(){
    if (localStorage.jwtToken) {
      console.log("token found");
      var loginElem = document.getElementById('login');
      loginElem.classList.add('hide-nav-items');
      var registerElem = document.getElementById('register');
      registerElem.classList.add('hide-nav-items');
    } else {
      //this.props.history.push("/login");
    }
  }
  compomonentDidMount(){
    this.hideItems();
  }
  render(){
    return (
      <div>
        <div className="navbar-wrapper">
          <header style={headerStyle}>
            <div className="NavItemContainer">
                <Link to='/'>
                  <h1>Reading List</h1>
                </Link>
              <ul>
                <div style={{float: 'right'}}>
                  <Link to='/register' style={{padding: '10px'}} id="register">Register</Link>
                  <Link to='/login' style={{padding: '10px'}} id="login">Login</Link>
                  <LogoutUser/>
                  <Link to="/explore" style={{padding: '10px'}} >Explore</Link>
                  <Link to="/" style={{padding: '10px'}}>Home</Link>
                </div>
            </ul>
            </div>
          </header>
        </div>
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
  width: '100%',
  float: 'right'
}

export default Nav;
