import React from 'react';
import Navbar from '../components/Navbar';
import { AnimatedText, Wrapper, HeaderText, VideoBg, Wrapperd } from './PageStyles';
import Classroom from "../videos/classroom.mp4"

const AnimatedTextTitles = [
    {
        text: "Putting a twist to",
    }, 

    {
        text: "Adding interactivity in",
    },

    {
        text: "",
    },
]

function Home () {
    return (
        <div>
            <Navbar></Navbar>
            <Wrapper index="1" height="85vh" width="100vw" bgcolor="#17E7AC">
                <VideoBg index="-1" autoPlay loop muted src={Classroom} type="videos/mp4"></VideoBg>
                <HeaderText index="3" color="#491985" pad="9rem">Putting a twist to</HeaderText>
                <HeaderText index="3" color="black" pad="0.5rem">the classroom.</HeaderText>
            </Wrapper>
        </div>
    )
}

export default Home;