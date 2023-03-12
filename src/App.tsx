import React, { useState, useMemo } from 'react';
import { Carousel } from 'antd';
import './App.css';
import Background from './components/background/Background';
import Section from './components/section/Section';
import Nav from './components/nav/Nav';
import Title from "./components/title/Title";
import SkillsSection from "./components/skillsSection/SkillsSection";
import WorkSection from './components/workSection/WorkSection';
import ContentSlide from './components/contentSlider/ContentSlide';
import LazyLoad from 'react-lazy-load';
import StoryLine from './components/storyLine/StoryLine';


function App() {

  const youtubeOptions = {
    height: '300',
    width: '400',
    playerVars: {
        autoplay: 0,
        defer: true,
        loading: "lazy",
        async: true
    },
};

  const ojoItems = [
    {
      description: <p>At <b>Ojo Labs</b> I was a fullstack developer on our <b>Homeowner</b> product - a tool to help users track their home's value, manage home maintenance and find local service providers. Our primary tech stack was <b>React/Typescript</b> frontend and <b>Php/Laravel</b> backend.</p>,
      content: <img alt="ojo-demo" src={require("./assets/images/digs01-2.png")} />
    },
    {
      description: <p>At <b>Ojo Labs</b> I was a fullstack developer on our <b>Homeowner</b> product - a tool to help users track their home's value, manage home maintenance and find local service providers. Our primary tech stack was <b>React/Typescript</b> frontend and <b>Php/Laravel</b> backend.</p>,
      content: <img alt="ojo-demo" src={require("./assets/images/digs01-2.png")} />
    },
    {
      description: <p>At <b>Ojo Labs</b> I was a fullstack developer on our <b>Homeowner</b> product - a tool to help users track their home's value, manage home maintenance and find local service providers. Our primary tech stack was <b>React/Typescript</b> frontend and <b>Php/Laravel</b> backend.</p>,
      content: <img alt="ojo-demo" src={require("./assets/images/digs01-2.png")} />
    }
  ]

  return (
    <div className="App">
      {/* <Nav /> */}
      <Title />
      <StoryLine title='Ojo Labs' items={ojoItems} />
    </div>
  );
}

export default App;
