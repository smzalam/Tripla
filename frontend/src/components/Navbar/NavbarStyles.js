import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

// :root {
//     margin: 0;
//     padding: 0;
//     --primarycolor: #17E7AC; 
//     --secondarycolor: #491985;
//     --black: black;
//     --white: white;
//     --grey:#9A8D8D;
//     --russoone: 'Russo One', sans-serif;
//     --saira: 'Saira', sans-serif;
//     --borderradius: 1.5rem;
//     font-size: 16px;
// }

export const Nav = styled.nav `
    position: sticky;
    display: flex;
    flex-flow: row nowrap;  
    justify-content: center;
    text-align: center;
    height: 15vh;
    box-shadow: 0 0.25rem 0.25rem grey;
    overflow: none;
    background-color: white;
    z-index: 2;
`;

export const Section = styled.section `
  
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: ${props => props.margin};
`;

export const NavBrand = styled.img`
    width: ${props => props.w};
    height: ${props => props.h};
`;

export const NavItems = styled.ul `
    display: flex;
`;

export const NavItemChild = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-decoration: none;
    text-align: center;
    place-content: center center    ;
    font-size: 1.5rem;
    font-family: 'Saira', sans-serif;
    color: ${props => props.color};
    margin: 0;
    padding: ${props => props.pad};

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
    }

    &:focus {
        color: ${props => props.focuscolor};
        font-weight: bold;
    }
`;

export const Name = styled.h1 `
    color: black;
    font-size: 2.5rem;
    margin: auto;
    padding-left: 2rem;
    font-family: 'Russo One', sans-serif;
`;

export const Btn = styled.button `
    background-color: ${props => props.bgcolor};
    margin: 1rem;
    padding: ${props => props.pad};
    border: none;
    border-radius: 1.5rem;
`;

export const Dddiv = styled.div `

    position: absolute;
    top: 4rem;
    width: fit-content;
    /* transform: translateX(-45%); */
    background-color: whitesmoke;
    /* border: 0.2rem solid black; */
    border-radius: 1.5rem;
    /* padding: 1rem; */
    overflow: hidden;
    transition: height var(--speed) ease;
        
`;

function NavItem(props) {
    
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <div>
            <NavItemChild to={props.to} color={props.color} pad={props.pad} onClick={() => setOpen(!open)}>
                {props.title} 
                {props.dd ? (
                    open ? (
                        <FaCaretDown />
                     ) : (
                        <FaCaretRight />
                     )
                ) : (
                    ""
                )}</NavItemChild>
            {open && props.children}
        </div>
    );
};  

function DropDown ({ items, multiSelect = false }) {
    
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <Dddiv onClick={() => toggle(!open)}>
            {items.map(item => (
                <NavItemChild to={item.link} pad="2rem" color="grey" onClick={() => toggle()}>{item.value}</NavItemChild>
            ))}
        </Dddiv>
    )
}

export {
    DropDown, 
    NavItem,
}