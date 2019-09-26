import React from "react"
import styled from "styled-components"

const CrossIcon = styled.svg`
  fill: #000000;
`

const Cross = () => {
  return (
    <CrossIcon
      height="40px"
      width="40px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      x="0px"
      y="0px"
    >
      <g transform="translate(0,-952.36218)">
        <path
          d="m 31.615228,983.9774 c 1.17154,-1.17153 3.07108,-1.17158 4.24266,0 l 14.14213,14.14214 14.14213,-14.14214 c 1.17157,-1.17157 3.07103,-1.1716 4.24264,-10e-6 1.17154,1.17154 1.17157,3.07108 0,4.24266 l -14.14214,14.14215 14.14215,14.1421 c 1.17156,1.1716 1.17153,3.0711 -1e-5,4.2427 -1.1716,1.1716 -3.07108,1.1715 -4.24264,0 l -14.14214,-14.1422 -14.14213,14.1422 c -1.17157,1.1715 -3.0711,1.1715 -4.24264,0 -1.1716,-1.1716 -1.17158,-3.0711 0,-4.2427 l 14.14214,-14.1421 -14.14214,-14.14216 c -1.17157,-1.17157 -1.17161,-3.07103 -1e-5,-4.24264 z"
          fillOpacity="1"
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        ></path>
      </g>
    </CrossIcon>
  )
}

export default Cross
