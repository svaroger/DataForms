import React, { useState, useEffect } from "react";
import './HeroSection.css'
import LeftCol from '../LeftCol/LeftCol'
import FormCard from '../FormCard/FormCard'

const HeroSection = () => {

  return (
    <div className="MainContainer">
      <div className="Form">
        <LeftCol />
        <FormCard />
      </div>
    </div>
  );
}

export default HeroSection
