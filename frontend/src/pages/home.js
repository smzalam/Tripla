import React from 'react';
import Navbar from '../components/Navbar';
import { AnimatedText, Wrapper, HeaderText, VideoBg, Wrapperd } from './PageStyles';
import Classroom from "../videos/classroom.mp4"

const AnimatedTextTitles = ["Putting a twist in", "Adding interactivity into", "Utilizing technology in"]

function Home () {
    return (
        <div>
            <Navbar></Navbar>
            <Wrapper index="1" pos="relative" height="85vh" width="100vw" bgcolor="#17E7AC">
                <Wrapper index="-1" pos="absolute" height="85vh" width="100vw">
                    <VideoBg autoPlay loop muted src={Classroom} type="videos/mp4"></VideoBg>
                </Wrapper>
                <Wrapper index="3" pos="relative" height="auto" width="auto">                    
                    <AnimatedText color="#491985" pad="9rem" text={AnimatedTextTitles}></AnimatedText>
                    <HeaderText color="black" pad="0.5rem">the classroom.</HeaderText>
                </Wrapper>
            </Wrapper>
        </div>
    )
}

export default Home;