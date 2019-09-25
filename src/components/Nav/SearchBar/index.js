import React from "react"
import styled from "styled-components"
import SpyGlass from "../Icons/spyglass"
import { device } from "../../breakpoint"

const SearchBarContainer = styled.div`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: auto;
  min-width: 40px;
  order: 3;
  flex-basis: 100%;
  background-color: #fff;

  @media ${device.large} {
    order: 2;
    flex-basis: 33%;
  }
`

const SearchBarForm = styled.form`
  display: block;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
`

const SearchBarFormContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

const SearchBarInput = styled.input`
  box-sizing: border-box;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5rem;
  color: #1a1a1a;
  text-transform: none;
  letter-spacing: 0.2px;
  color: #1a1a1a;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  border: 1px solid #999;
  border-radius: 2px;
  padding: 7px;
  background-color: #fff;
  height: 40px;
  max-height: 72px;
  color: #4d4f53;
  background-color: #fff;
  width: 100%;
  margin-bottom: 0;
`

const SearchBarButton = styled.button`
  position: absolute;
  cursor: pointer;
  border-width: 0;
  background-color: transparent;
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  overflow: hidden;
`

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarForm method="post" noValidate>
        <SearchBarFormContainer>
          <SearchBarInput placeholder="Search" aria-label="Search" />
          <SearchBarButton>
            <SpyGlass />
          </SearchBarButton>
        </SearchBarFormContainer>
      </SearchBarForm>
    </SearchBarContainer>
  )
}

export default SearchBar
