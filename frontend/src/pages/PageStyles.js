import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div `
    position: ${props => props.pos};
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.bgcolor};
    z-index: ${props => props.index};
    margin: ${props => props.margin};
    display: flex;
    flex-flow: ${props => props.ff};
    justify-content: ${props => props.jc};
    align-items: ${props => props.ai};
    align-content: ${props => props.ac};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    border: ${props => props.border};
    border-radius: ${props => props.borderrad};
`;

export const HeaderText = styled.h1 `
    font-family: 'Russo One', sans-serif;
    font-size: ${props => props.fontsize};
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
    /* position: absolute; */
    width: ${props => props.width};
    height: ${props => props.height};
    right: 0;
    object-fit: cover;
    margin: 0;
    padding: 0;
    /* background-color: black; */
    opacity: 0.5;
`;

export const Card = styled.div `
    width: ${props => props.width};
    height: ${props => props.height};
    border: none;
    border-radius: 1.5rem;
    background-color: ${props => props.bgcolor};
`;

export const Box = styled.div `
    border: 0.2rem solid black;
    border-radius: 1.5rem;
    height: 40vh;   
    margin: 2rem;
`;

export const Input = styled.input `
    padding: 0.5em;
    margin: 0.5em;
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color};
    /* border: 0.2rem solid black; */
    border-radius: 1.5rem;
    font-size: ${props => props.fontsize};
    font-family: 'Russo One', sans-serif;

    ::placeholder {
        color: grey;    
        text-align: center;
    }
`;

function QA () {
    return (
        <Wrapper pos="relative" width="fit-content" ff="row nowrap" jc="space-around" ai="center" margin="1rem" border="0.2rem solid black">
            <Wrapper pos="relative" ff="column nowrap" jc="center" ai="center" border="0.2rem solid black">
                <Wrapper margin="1rem">Q</Wrapper>
                <Wrapper margin="1rem">A</Wrapper>
            </Wrapper>
            <Wrapper pos="relative" ff="column nowrap" jc="center" ai="center">
                <Wrapper>
                    <Input type="text" placeholder="Enter your question" width="100%"/>
                </Wrapper>
                <Wrapper ff="row nowrap" jc="center" ai="center">
                    <Input type="text" placeholder="Enter your answers" width="10rem"/>
                    <Input type="text" placeholder="Enter your answers" width="10rem"/>
                    <Input type="text" placeholder="Enter your answers" width="10rem"/>
                    <Input type="text" placeholder="Enter your answers" width="10rem"/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export {
    QA,
}