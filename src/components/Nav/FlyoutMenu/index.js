import React, { useState } from "react"
import styled from "styled-components"
import BurgerIcon from "../Icons/hamburger"
import CrossIcon from "../Icons/cross"
import { device } from "../../breakpoint"
import Logo from "../Logo/logo"


const FlyoutMenuContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
  background-color: transparent;
  min-height: 100%;

  @media ${device.large} {
    order: 3;
    flex-grow: 1;
  }
`

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;
  cursor: pointer;
  min-width: 48px;
  height: 48px;
  box-sizing: border-box;
  background: 0 0;
  border: none;
  z-index: 3;

  @media ${device.large} {
    display: none;
  }
`

const SideBarMenu = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: -80%;
    bottom: 0;
    width: 80%;
    max-width: 322px;
    opacity: 0;
    transition: left .1s ease-in,opacity .3s ease;
    background-color: #fff;
    z-index: 300;
    overflow: hidden;

    ${props =>
      props.toggleSideBar &&
      `
        left: 0;
        opacity: 1; 
    `}

    @media ${device.large} {
        position: relative;
        left: 0;
        opacity: 1;
        background-color: transparent;
        overflow: visible;
        transition: none;
        width: 100%;
        max-width: inherit;
        flex-basis:90%;
    }
`

const CloseMenu = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    margin-left: 4px;
    align-items: center;

    @media ${device.large} {
        display: none;
    }
`

const MenuUnderlay = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 25;
  transition: opacity 0.1s;
  pointer-events: none;

  ${props =>
    props.toggleSideBar &&
    `
        transition: opacity .1s;
        opacity: 1;
        pointer-events: all;
    `}
`

const LogoContainer = styled.div`
display: block;
  padding-right: 16px;
  padding-left: 24px;
`;

const FlyoutMenuLevelOne = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 0;
  transition: transform 0.3s ease;
  overflow-y: scroll;
  margin-top: 20px;

  @media ${device.large} {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 100%;
    flex-direction: row;
    margin-bottom: inherit;
    overflow-y: visible;
    padding-left: 0;
    padding-right: 0;
    justify-content: flex-end;
    margin-right: 40px;
    margin-top: 0;
  }
`

const LevelOneItem = styled.li`

  @media ${device.large} {
    display: flex;
    flex-basis: auto;
    width: auto;
    height: auto;
    padding-bottom: 0;
    background-color: transparent;
  }
`

const NotLink = styled.span`
font-family: 'Nunito', sans-serif;
font-weight: 600;
font-size: 18px;
display: flex;
padding-top: 4px;
padding-right: 8px;
padding-bottom: 4px;
padding-left: 16px;
align-items: center;
box-sizing: border-box;
text-decoration: none;
`;

const FlyoutMenuLevelOneLink = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5rem;
  color: #1a1a1a;
  text-transform: none;
  letter-spacing: 0.2px;
  cursor: pointer;
  display: flex;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  width: 100%;
  min-height: 40px;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  justify-content: space-between;
  color: #4d4f53;
  cursor: pointer;

  &:focus {
    background-color: #f1f1f1;
  }

  @media ${device.large} {
    margin-left: 4px;
    margin-right: 4px;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`

const FlyoutMenu = () => {
  const [sidebar, setSideBar] = useState(false)

  function openSideBar() {
    setSideBar(true)
  }

  function closeSideBar() {
    setSideBar(false)
  }

  return (
    <FlyoutMenuContainer>
      <MenuButton onClick={openSideBar}>
        <BurgerIcon />
      </MenuButton>

      <SideBarMenu toggleSideBar={sidebar}>
        <CloseMenu onClick={closeSideBar}>
          <CrossIcon />
          <LogoContainer>
              <Logo />
            </LogoContainer>
        </CloseMenu>
        <FlyoutMenuLevelOne>
          <LevelOneItem><NotLink>Useful Links:</NotLink> </LevelOneItem>
          <LevelOneItem>
            <FlyoutMenuLevelOneLink style={{ color: '#0470E3'}} href="https://www.skyscanner.net/">Skyscanner</FlyoutMenuLevelOneLink>
          </LevelOneItem>
          <LevelOneItem>
            <FlyoutMenuLevelOneLink style={{ color: '#FF7345'}} href="https://www.hostelworld.com/">Hostelworld</FlyoutMenuLevelOneLink>
          </LevelOneItem>
        </FlyoutMenuLevelOne>
      </SideBarMenu>

      <MenuUnderlay toggleSideBar={sidebar} onClick={closeSideBar} />
    </FlyoutMenuContainer>
  )
}

export default FlyoutMenu
