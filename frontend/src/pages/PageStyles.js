import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div `
    position: relative;
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.bgcolor};
    z-index: ${props => props.index};
`;

export const HeaderText = styled.h1 `
    font-family: 'Russo One', sans-serif;
    font-size: 6rem;
    color: ${props => props.color};
    margin: 0;
    padding-top: ${props => props.pad};
    z-index: 0;
`;

export const VideoBg = styled.video `
    position: absolute;
    width: 100vw;
    height: 85vh;
    right: 0;
    object-fit: cover;
    margin: 0;
    padding: 0;
    /* background-color: black; */
    opacity: 0.2;
    z-index: -1;
`;