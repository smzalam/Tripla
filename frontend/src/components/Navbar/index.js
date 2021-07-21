import React, { Component } from 'react'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'
import { Name, Nav, Section, Btn, NavItems, NavItem, NavBrand, NavItemChild } from './NavbarStyles'
import { DropDown, DropDownMenu } from './NavbarStyles';

const gamedd = [
    {
        value: 'How To',
        // link: '/game/how-to',
    },
    {
        value: 'Create',
        // link: '/game/create',
    },
    {
        value: 'Join',
        // link: '/game/join',
    },
]

function Navbar () {
    return (
        <Nav>
            <Section margin="0 auto 0 .75rem">
                <NavItemChild to="/">
                    <NavBrand width="48" height="auto" src={"/images/Logo.png"} alt="tripla"></NavBrand>
                    <Name>tripla</Name>
                </NavItemChild>
            </Section>
            <Section>
                <NavItems>
                    <NavItem to="/" focuscolor="black" pad="2rem" color="grey" title="Home"></NavItem>
                    <NavItem to="/about" focuscolor="black" pad="2rem" color="grey" title="About"></NavItem>
                    <NavItem focuscolor="black" pad="2rem" color="grey" title="Game" dd="True"><DropDown items={gamedd}></DropDown></NavItem>
                </NavItems>
            </Section>
            <Section margin="0 0.75rem 0 auto">
                <Btn bgcolor="#17E7AC" pad="1rem 2rem"><NavItem to="login" color="white" focuscolor="white" title="Login"></NavItem></Btn>
                <Btn bgcolor="#491985" pad="1rem 2rem"><NavItem to="sign-up" color="white" focuscolor="white" title="Sign Up"></NavItem></Btn>
            </Section>
        </Nav>
    );
}

export default Navbar;