import React from 'react'
import {
  SidebarContainer,
  Icon, CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
  const token = localStorage.getItem("token");
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>{
            token ?
              <SidebarLink to="signup" onClick={toggle}>
                username
              </SidebarLink> :
              <SidebarLink to="signup" onClick={toggle}>
                Sign Up

              </SidebarLink>

          }
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar