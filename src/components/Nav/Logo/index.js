import styled from "styled-components"
import { device } from "../../breakpoint"

const LogoImg = styled.svg`
  display: block;
  width: 100px;
  transition: height 0.3s ease-in;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 0;
  max-width: none;
  box-sizing: border-box;

  path {
    fill: ${props => props.theme.brandColor};
  }

  @media ${device.large} {
    width: 140px;
  }
`

export default LogoImg
