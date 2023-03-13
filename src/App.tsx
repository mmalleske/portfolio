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
      <OjoSection />
    </div>
  );
}

export default App;
