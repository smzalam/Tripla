import React, { useState } from 'react'
import { Wrapper, HeaderText, Card, Input, QA} from './PageStyles';
import { Name, NavBrand, Btn, NavItem } from '../components/Navbar/NavbarStyles'

function New() {

    const [questions, setQuestions] = useState([
        <QA></QA>,
        <QA></QA>,
        <QA></QA>,
    ])

    const addQ = () => {
        setQuestions([...questions, <QA></QA>]);
        console.log("success");
    } 

    const createDB = event => {

    }


    return(
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
                <Wrapper pos="relative" jc="center" ai="center" margin="2rem">
                    <HeaderText>Questions and Answers</HeaderText>
                </Wrapper>
                <Wrapper pos="relative" ff="column nowrap" jc="center" ai="center">
                    { questions.map(() => (<QA></QA>))}
                    <Wrapper position="absolute" margin="2rem" top="100%" bottom="0" jc="space-around" ai="center">
                        <Btn bgcolor="#491985" pad="1rem 2rem" onClick={addQ}><NavItem color="white" focuscolor="white" title="Add question"></NavItem></Btn>
                        <Btn bgcolor="#17E7AC" pad="1rem 2rem" onClick={createDB}><NavItem to="/game/pod-profile" color="white" focuscolor="white" title="Create Pod"></NavItem></Btn>
                    </Wrapper>
                </Wrapper>
            </Card>
        </Wrapper>
    )
}

export default New;