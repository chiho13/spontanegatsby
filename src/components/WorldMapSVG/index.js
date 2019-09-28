import React, {useState, useLayoutEffect} from "react";
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

const BasicMap = () => {
    const [country, setCountry] = useState('');

    function showCountry(country) {
        console.log(country);
        setCountry(country);
    }

    useLayoutEffect(() => {

      const base = worldJson.objects.units.geometries.map(el => {
        return {"country": el.properties.name, "code": el.id}
      });

      console.log(JSON.stringify(base));
    }, [])

    console.log(country);
    return (
      <WrapperStyles>
        <h2>Discover {country}</h2>
        <ComposableMap
          projectionConfig={{
            scale: 250,
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
                
                <Link key={i} to={geography.properties.name.replace(/[.,\s]/g, '').toLowerCase()}    onMouseOver={() => showCountry(geography.properties.name)}>
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