import React from 'react';
import styled from 'styled-components';
import GMapsIcon from './googleMapIcon';

const ButtonStyle = styled.a`
    line-height: 1.5;
    position: relative;
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    font-family: Helvetica;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    box-shadow: 0 2px 0 rgba(0,0,0,0.015);
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #007bff;
    background-color: #fff;
    border-color: #007bff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        color: #fff;
        background-color: #007bff;
    }

    &:hover svg {
        fill: #fff
    }
`;

const SpanText = styled.span`
    margin-left: 10px;
    font-weight: 500;
`;

const GoogleMapButton = (props) => {
    return <ButtonStyle href={props.link} target="_blank" >
            <GMapsIcon /> <SpanText>Open in Google Maps </SpanText>
    </ButtonStyle>
};

export default GoogleMapButton;