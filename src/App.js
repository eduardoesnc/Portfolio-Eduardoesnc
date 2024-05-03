import './App.css';
import React, { useEffect, useState } from "react";

// import {ClientsSlider} from './components/clients-slider/clients-slider';
import {SkillsSlider} from './components/skills-slider/skills-slider';
import {PortfolioSection} from './components/portfolio-section/portfolio-section';
import NavMenu from "./components/nav-menu/nav-menu";
import {BackgroundLines} from './components/background/background';
import {SocialLinks} from './components/social-links/social-links';
// import {Banner} from './components/banner/banner';
import {Header} from './components/header/header';
import { QuemSou } from "./components/about-section/about";
import { Resume } from "./components/resume-section/resume";
import { Footer } from "./components/footer/footer";
import { Contact } from './components/contact-section/contact';
import { Services } from './components/services-section/services';
import { BtnScrollTop } from './components/btn-scroll-top/btn-scroll-top';
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {

  const [onTop, setOnTop] = useState(false);
  const [showBtnScroll, setShowBtnScroll] = useState(false)

  useEffect(function(){
      function positionScroll() {
          if(window.scrollY > 40){
            setOnTop(true);    
          }else {
            setOnTop(false); 
          }
          if(window.scrollY > 399){  
            setShowBtnScroll(true);  
          }else {
            setShowBtnScroll(false);  
          }
      }
      window.addEventListener('scroll', positionScroll);
  });

  return (
    <div className="App">

      <SpeedInsights/>

      <BackgroundLines/>

      <SocialLinks/>
      
      <NavMenu acao={onTop}/>

      <Header/>

      <QuemSou/>

      <Resume/>

      <SkillsSlider/>

      <Services/>

      {/* <Banner/> */}
        
      <PortfolioSection/>

      {/* <ClientsSlider/> */}

      <Contact/>

      <BtnScrollTop show={showBtnScroll}/>

      <Footer/>

    </div>
  );
}

export default App;
