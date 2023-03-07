import React, { useState, useMemo } from 'react';
import { Carousel } from 'antd';
import './App.css';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Title from "./components/title/Title";
import SkillsSection from "./components/skillsSection/SkillsSection";
import ContentSlide from './components/contentSlider/ContentSlide';

function App() {

  const [sectionIndex, setSectionIndex] = useState(0);

  const sections = [
    <ContentSlide
      title='Ojo Labs'
      body='At Ojo labs I was a fullstack developer working on the homeowner app.'
    />,
    <Title />,
    <SkillsSection />,
    <ContentSlide />
  ];

  // const onChangeSectionIndex = () => {
  //   setSectionIndex(1);
  //   console.log(sectionIndex, 'foo')
  // }

  const handleUIEvent = (e: any) => {
    let ready = true;
    let newSectionIndex = sectionIndex;

    if (e.deltaY && ready) {
      // console.log(e.deltaY)
      if (e.deltaY > 100) {
        if (sectionIndex < sections.length - 1) {
          newSectionIndex += 1;
          setSectionIndex(newSectionIndex);
          ready = false;
        }
      }

      if (e.deltaY < -100) {
        if (sectionIndex >= 0) {
          newSectionIndex -= 1;
          setSectionIndex(newSectionIndex);
          ready = false;
        }
      }

      setTimeout(() => { ready = true; }, 1000)
    }
  };

  const displayedSection = useMemo(() => {
    return (
      sections[sectionIndex]
    )
  }, [sectionIndex]);

  return (
    <div className="App">
      <Background />
      {/* <Nav /> */}
      <Title />
      <SkillsSection />
      <ContentSlide
        title='Ojo Labs'
        body='At Ojo labs I was a fullstack developer working on the homeowner app.'
      />
    </div>
  );
}

export default App;
