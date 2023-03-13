import React from 'react';
import './App.css';
import Title from "./components/title/Title";
import OjoSection from './components/workSection/OjoSection';
import SectionHeader from './components/sectionHeader/SectionHeader';
import SkillsSection from './components/skillsSection/SkillsSection';
import LazyLoad from 'react-lazy-load';


function App() {

  return (
    <div className="App">
      {/* <Nav /> */}
      <Title />      
      <SectionHeader id="skills" title='Skills' />
      <SkillsSection />
      <SectionHeader id="work" title='Work' />
      <OjoSection />
      <OjoSection />
      <OjoSection />
      <SectionHeader id="volunteer" title='Volunteer' />
      <SectionHeader id="personal" title='Personal' />
      <SectionHeader id="about" title='About' />
    </div>
  );
}

export default App;
