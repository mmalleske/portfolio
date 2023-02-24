import React, {useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Title from "./components/title/Title";
import SkillsSection from "./components/skillsSection/SkillsSection";

function App() {

  const [sectionIndex, setSectionIndex] = useState(0);

  const sections = [<Title />, <SkillsSection />];

  const onChangeSectionIndex = () => {

    setSectionIndex(1);
    console.log(sectionIndex, 'foo')
  }

  const displayedSection = useMemo(() => {
    return (
      sections[sectionIndex]
    )
  }, [sectionIndex]);

  return (
    <div className="App">
      <Background />
      <Nav />

      {displayedSection}
      <button onClick={onChangeSectionIndex}>Next</button>
    </div>
  );
}

export default App;
