import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavItem,
  NavMenu,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

import { Link, Navigate } from 'react-router-dom';
const NavBar = ({ toggle }) => {

  const token = localStorage.getItem("token")

  return (
    <> {token ? <Navigate to="/audit" /> :

      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>Conforme</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>A propos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <Link to="/register">

                <NavLinks to='signup'>Sign Up</NavLinks>
              </Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Link to={"/login"}>

              <NavBtnLink to="/login">Sign In</NavBtnLink>
            </Link>
          </NavBtn>

        </NavBarContainer>
      </Nav>
    }

    </>
  );
}

export default NavBar