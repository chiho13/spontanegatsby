import React from "react"
import styled from "styled-components"
import AccountIcon from "../Icons/account"
import { device } from "../../breakpoint"

const AccountContainer = styled.div`
  display: flex;
  background-color: transparent;
  order: 2;
  min-width: 48px;
  z-index: 3;
  align-items: center;
  justify-content: center;

  @media ${device.large} {
    flex-grow: 1;
    justify-content: flex-end;
    order: 4;
  }
  .account_openAccount {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    left: -999px;
  }

  .account_open {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40px;
    background-color: transparent;
    z-index: 5;
    margin-bottom: 0;
  }

  .account_openAccountButtonMobile {
    display: block;
    height: 40px;
    width: 40px;
    border: 0;
    background: none;
    box-sizing: border-box;
  }
`

const Account = () => {
  return (
    <AccountContainer>
      <input
        class="account_openAccount"
        type="checkbox"
        id="account_open"
      ></input>
      <label for="account_open" class="account_openAccountIcon">
        <button type="button" class="account_openAccountButtonMobile">
          <AccountIcon />
        </button>
      </label>
    </AccountContainer>
  )
}

export default Account
