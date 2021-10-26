import React from "react";
import './HeroSection.css'
import SideMenu from '../SideMenu/SideMenu'
import FormSection from '../FormSection/FormSection'

const HeroSection = () => {

  return (
    <div className="MainContainer">
      <div className="Form">
        <SideMenu />
        <FormSection />
      </div>
    </div>
  );
}

export default HeroSection
