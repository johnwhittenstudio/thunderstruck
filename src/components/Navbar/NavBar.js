import React from "react";
import { Link } from 'react-router-dom';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
// import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone'
import { Divide as Hamburger } from 'hamburger-react'
import classes from './NavBar.module.css'
  
const Navbar = () => {
  return (
    <>
      <Nav className={classes.NavBar}>
        <NavMenu>
          <div className={classes.headerLogo}>
          <NavLink to="/" activeStyle>
          {/* <BoltTwoToneIcon /> */}
            <div className={classes.shine}>
              <h1><Link to="/">thunderstruck</Link></h1>
          </div>
          {/* <BoltTwoToneIcon /> */}
          </NavLink>
            </div>
          <NavLink to="/about" activeStyle>
            about
          </NavLink>
          <NavLink to="/artists" activeStyle>
            artists
          </NavLink>
          <NavLink to="/exhibitions" activeStyle>
            exhibitions
          </NavLink>
          <NavLink to="/shop" activeStyle>
            shop
          </NavLink>
          <NavLink to="/trips" activeStyle>
            trips
          </NavLink>
          <div className={classes.Hamburger}>
          <Hamburger className={classes.Hamburger}
            easing="ease-in"
            size={25}
            label="Show menu"
            // hideOutline={false}
            onToggle={toggled => {
              if (toggled) {
                // open a menu
              } else {
                // close a menu
              }
            }} />
            </div>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;