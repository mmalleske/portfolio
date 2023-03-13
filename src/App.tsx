import React from 'react';
import './App.css';
import Title from "./components/title/Title";
import OjoSection from './components/workSection/OjoSection';
import RealSavvySection from './components/workSection/RealSavvySection';
import SectionHeader from './components/sectionHeader/SectionHeader';
import SkillsSection from './components/skillsSection/SkillsSection';
import ChickenWaffleSection from './components/workSection/ChickenWaffleSection';
import VolunteerSection from './components/workSection/VolunteerSection';
import PersonalSection from './components/workSection/PersonalSection';
import AboutSection from './components/workSection/AboutSection';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      {/* <Nav /> */}
      <Title />      
      <SectionHeader id="skills" title='Skills' />
      <SkillsSection />
      <SectionHeader id="work" title='Work' />
      <OjoSection />
      <RealSavvySection />
      <ChickenWaffleSection />
      <SectionHeader id="volunteer" title='Volunteer' />
      <VolunteerSection />
      <SectionHeader id="personal" title='Personal' />
      <PersonalSection />
      <SectionHeader id="about" title='About' />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;