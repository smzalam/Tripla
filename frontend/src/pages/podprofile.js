import React from 'react'
import { Wrapper, Card, Input, Box, QA } from './PageStyles'
import { NavBrand, NavItem, Name, Btn } from '../components/Navbar/NavbarStyles' 

function PodProfile () {
    return (
        <Wrapper pos="relative" width="100%" height="100%" bgcolor="black" ff="column nowrap" jc="center" ai="center">
            <Card width="90%" height="90%" bgcolor="white">
                <Wrapper width="100%" height="auto" ff="row nowrap" jc="space-around" ai="center">
                    <Wrapper jc="center" ai="center">
                        <NavBrand width="48" height="auto" src={"/images/Logo.png"} alt="tripla"></NavBrand>
                        <Name>tripla</Name>
                    </Wrapper>
                    <Wrapper>   
                        <Input type="text" placeholder="Enter Pod's Title" width="50rem" height="2rem" color="#491985" fontsize="2rem" />
                    </Wrapper>
                </Wrapper>
                <Wrapper pos='relative' ff="column nowrap" jc="center" ai="center">
                    <Wrapper pos='relative' ff="row nowrap" jc="space-between" ai="center">
                        <Box>Hi</Box>
                        <Box>Hi</Box>
                    </Wrapper>
                    <Wrapper pos='relative' ff="column nowrap" jc="center" ai="center">
                        <QA></QA>
                        <QA></QA>
                        <QA></QA>
                    </Wrapper>
                </Wrapper>
                <Wrapper ff="column nowrap" jc="center" ai="center">
                    <Btn bgcolor="#491985" pad="1rem 2rem"><NavItem to="/pod-profile" color="white" focuscolor="white" title="Play Game"></NavItem></Btn>
                </Wrapper>
            </Card>
        </Wrapper>
    )
}

export default PodProfile;