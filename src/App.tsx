import React, { useState, useMemo } from 'react';
import { Carousel } from 'antd';
import './App.css';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Title from "./components/title/Title";
import LazyLoad from 'react-lazy-load';
import StoryLine from './components/storyLine/StoryLine';
import YouTube from 'react-youtube';


function App() {

  const youtubeOptions = {
    height: '220',
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
      content: <img alt="example" src={require("./assets/images/ojo.png")} />
    },
    {
      description: <p>Among the many contributions I made during my time at Ojo was the <b>Announcement Engine</b> - a service that gathered data points based on the current market as well as the individual user to deliver personalized and meaningful notifications to our consumers.</p>,
      content: <img width="455" alt="ojo-demo" src={require("./assets/images/digs01-2.png")} />
    },
    {
      description: <p>I also helped build our <b>Maintenance Checklist</b> feature, which integrates with <b>Thumbtack</b> to provide realtime maintenance suggestions specific to your home and local provider recommendations.</p>,
      content: <img alt="ojo-demo" src={require("./assets/images/digs-maintenance-checklist.png")} />
    },
    {
      description: <p>Outside of the Homeowner app, I also built internal tools to integrate my team's application into the greater Ojo ecosystem. One of these tools utilized RabbitMQ to listen to user interactions with our agents, or "events", and sent out automated invites to our platform. The event system also allowed us to gather insightful analytics.</p>,
      content: <img width="455" alt="ojo-demo" src={require("./assets/images/digs-et.jpg")} />
    }
  ];

  const realSavvyItems = [
    {
      description: <p>At <b>Ojo Labs</b> I was a fullstack developer on our <b>Homeowner</b> product - a tool to help users track their home's value, manage home maintenance and find local service providers. Our primary tech stack was <b>React/Typescript</b> frontend and <b>Php/Laravel</b> backend.</p>,
      content: <div className="mm-yt"><YouTube opts={youtubeOptions} videoId="7otxRER8J1E" /></div>
    },
    {
      description: <p>Among the many contributions I made during my time at Ojo was the <b>Announcement Engine</b> - a service that gathered data points based on the current market as well as the individual user to deliver personalized and meaningful notifications to our consumers.</p>,
      content: <img width="455" alt="ojo-demo" src={require("./assets/images/digs01-2.png")} />
    },
    {
      description: <p>I also helped build our <b>Maintenance Checklist</b> feature, which integrates with <b>Thumbtack</b> to provide realtime maintenance suggestions specific to your home and local provider recommendations.</p>,
      content: <img alt="ojo-demo" src={require("./assets/images/digs-maintenance-checklist.png")} />
    },
    {
      description: <p>Outside of the Homeowner app, I also built internal tools to integrate my team's application into the greater Ojo ecosystem. One of these tools utilized RabbitMQ to listen to user interactions with our agents, or "events", and sent out automated invites to our platform. The event system also allowed us to gather insightful analytics.</p>,
      content: <img width="455" alt="ojo-demo" src={require("./assets/images/digs-et.jpg")} />
    }
  ];

  return (
    <div className="App">
      {/* <Nav /> */}
      <Title />
      <StoryLine id="skills" title='Ojo Labs' items={ojoItems} />
      <StoryLine title='Ojo Labs' items={realSavvyItems} />
    </div>
  );
}

export default App;
