import React from 'react';
import { Wrapper, Card, Box } from './PageStyles';
import { Name, NavBrand, Btn, NavItem } from '../components/Navbar/NavbarStyles'

function Create () {
    return (
        <Wrapper pos="relative" width="100vw" height="100vh" bgcolor="black" ff="column nowrap" jc="center" ai="center">
            <Card width="90vw" height="90vh" bgcolor="white">
                <Wrapper pos="relative" width="inherit" height="15vh" ff="row nowrap" jc="center" ai="center">
                    <NavBrand width="48" height="auto" src={"/images/Logo.png"} alt="tripla"></NavBrand>
                    <Name>tripla</Name>
                </Wrapper>

                <Box></Box>
                <Wrapper ff="column nowrap" jc="center" ai="center">
                    <Btn bgcolor="#491985" pad="1rem 2rem"><NavItem to="/game/new" color="white" focuscolor="white" title="Create New Game"></NavItem></Btn>
                </Wrapper>
            </Card>
        </Wrapper>
    )
}

export default Create;