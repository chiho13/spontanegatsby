import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

import { device } from "../breakpoint"

import styled from 'styled-components';
import worldJson from './world-50m.json';
import {Link, navigate} from 'gatsby';


const WrapperStyles = styled.div`
  
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;;

  @media ${device.large} {
    width: 100%;
  }
`;


const CountryLink = styled(Link)`
    fill: ${props => props.havebeen === "true" ? "#81c784" : "#ECEFF1"};
    stroke: #607D8B;
    stroke-width: 0.75;
    outline: none;

    &:hover, &:focus {
      fill: #007bff;
      stroke: #007bff;
      transition: "all 0.2s ease";
    }
`;

const BasicMap = (props) => {

    function onMouseOverCountry(val) {
      props.changeCountry(val);
    }

    function onMouseOut() {
      props.changeCountry("");
    }

    function onTouchEvent(val) {
      props.changeCountry(val);
    }
    
    return (
      <WrapperStyles>
        <ComposableMap
          projectionConfig={{
            scale: 260,
            rotation: [-11,0,0],
          }}
          width={1250}
          height={751}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={worldJson}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                
                <CountryLink havebeen={props.data.includes(geography.id).toString()} key={i} to={geography.properties.name.replace(/[.,\s]/g, '').toLowerCase()}   onTouchEnd={(e) => {
                  e.preventDefault();
                  e.currentTarget.focus();
                  onTouchEvent(geography.properties.name);
                }} onMouseLeave={onMouseOut} onMouseOver={() => onMouseOverCountry(geography.properties.name)}>
                <Geography
                  
                  data-name={geography.properties.name.toLowerCase()}
                  geography={geography}
                  projection={projection}
               
                />
                </CountryLink>
              )
              )}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </WrapperStyles>
    )
}

export default BasicMap