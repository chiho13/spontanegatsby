import React from "react"
import styled from "styled-components"
import FlyoutMenu from "./FlyoutMenu"
import SearchBar from "./SearchBar"
import Account from "./Account"
import {device} from "../breakpoint"
import Logo from "./Logo/Logo"
import LogoImg from "./Logo"
import {Link} from "gatsby"

const MainNav = styled.nav `
  min-height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding-top: 0;
  border-bottom-width: 0;
  border-bottom-color: #ccc;
  border-bottom-style: solid;
  position: relative;

  @media ${device.large} {
    margin-bottom: 0;
    z-index: 30;
    width: 100%;
  }
`

const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  height: 48px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  border-bottom-width: 0;
  border-bottom-style: solid;
  border-bottom-color: #ccc;

  @media ${device.large} {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    flex-shrink: 0;
    flex-grow: 1;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 0;
    border-bottom-width: 0;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    height: 100%;
  }
`

const LogoContainer = styled.div `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  order: 2;
  flex-basis: 120px;
  flex-grow: 0;
  height: 100%;
  transition: flex-basis 0.3s ease-in;
  color: transparent;
  flex-basis: calc(100% - 96px);
  z-index: 3;
  padding-bottom: 0;

  @media ${device.large} {
    flex-basis: 200px;
    flex-grow: 0;
    height: 64px;
  }
`

const GlobalNavigation = () => {
    return (
        <MainNav>
            <Container aria-label="nav container">
                <LogoContainer>
                    <Link to="/">
                        <Logo/>
                    </Link>
                </LogoContainer>
                {/* <SearchBar /> */}
                <FlyoutMenu/>
            </Container>
        </MainNav>
    )
}

export default GlobalNavigation
