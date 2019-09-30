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
import {Link} from 'gatsby';
import Searchbar from '../Nav/SearchBar';
import { valueFromASTUntyped } from "graphql";

const WrapperStyles = styled.div`
  
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;;

  @media ${device.large} {
    width: 100%;
  }

`;

const BasicMap = (props) => {

    function onMouseOverCountry(val) {
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
                
                <Link key={i} to={geography.properties.name.replace(/[.,\s]/g, '').toLowerCase()}    onMouseOver={() => onMouseOverCountry(geography.properties.name)}>
                <Geography
                  
                  data-name={geography.properties.name.toLowerCase()}
                  geography={geography}
                  projection={projection}
               
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#007bff",
                      stroke: "#007bff",
                      transition: "all 0.2s ease",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#0066d3",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
                </Link>
              )
              )}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </WrapperStyles>
    )
}

export default BasicMap