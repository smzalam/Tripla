import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div `
    position: ${props => props.pos};
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
`;

export const AnimatedText = styled.h1 `
    font-family: 'Russo One', sans-serif;
    font-size: 6rem;
    color: ${props => props.color};
    margin: 0;
    padding-top: ${props => props.pad};
    animation: fade 15s infinite;

    @keyframes fade {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }

        20% {
            opacity: 100%;
            transform: scale(1)
        }

        40% {
            opacity: 0%;
            transform: scale(0.8);
        }

        60% {
            opacity: 100%;
            transform: scale(1)
        }

        80% {
            opacity: 0%;
            transform: scale(0.8);
        }

        100% {
            opacity: 100%;
            transform: scale(1)
        }
    }


    &::after {
        content: "";
        animation: change 15s linear infinite;
    }

    @keyframes change {
        0% {
            content: "${props => props.text["0"]}";
        }
        60% {
            content: "${props => props.text[1]}";
        }
        100% {
            content: "${props => props.text[2]}";
        }
    }
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
    opacity: 0.4;
`;