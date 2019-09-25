import React from "react"
import styled from "styled-components"

const BurgerIcon = styled.svg`
  fill: #000000;
`

const Hamburger = () => {
  return (
    <BurgerIcon width="30px" height="30px" viewBox="0 0 100 100">
      <g>
        <path d="M22,34h56c2.2,0,4-1.8,4-4c0-2.2-1.8-4-4-4H22c-2.2,0-4,1.8-4,4C18,32.2,19.8,34,22,34z"></path>
        <path d="M78,46H22c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4h56c2.2,0,4-1.8,4-4C82,47.8,80.2,46,78,46z"></path>
        <path d="M78,66H22c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4h56c2.2,0,4-1.8,4-4C82,67.8,80.2,66,78,66z"></path>
      </g>
    </BurgerIcon>
  )
}

export default Hamburger
