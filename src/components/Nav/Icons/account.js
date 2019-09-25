import React from "react"
import styled from "styled-components"

const AccountIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #000000;
`

const Account = () => {
  return (
    <AccountIcon
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      x="0px"
      y="0px"
    >
      <g data-name="04">
        <path d="M12,14A6,6,0,1,0,6,8,6,6,0,0,0,12,14ZM12,4A4,4,0,1,1,8,8,4,4,0,0,1,12,4Z"></path>
        <path d="M21.8,20.4,21,19.29A8.27,8.27,0,0,0,14.38,16H9.47a8.19,8.19,0,0,0-7.37,4.55,1,1,0,0,0,1.79.89A6.2,6.2,0,0,1,9.47,18h4.91a6.26,6.26,0,0,1,5,2.49l.83,1.11a1,1,0,0,0,1.6-1.2Z"></path>
      </g>
    </AccountIcon>
  )
}

export default Account
