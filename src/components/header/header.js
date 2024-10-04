import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import './header.css';

export function Header(){

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Eduardo Estevão", "Developer", "Freelancer"], 
        startDelay: 100,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 800,
        loop: true,
        });

        // Destropying
        return () => {
        typed.destroy();
        };

    }, []);
    
    return (
        <header className='header' id="header">

          <div className='header-content'>
            <h2>Hey!</h2>
            <h1>I am <span ref={el}></span></h1>
            <h2>Bringing your ideas to life</h2>
            <button><a href="#contact">Get in touch!</a></button>
          

            <div className='header-info'>
              <div className='header-single-info'>
                <h4>Email</h4>
                <p>eduardoestevaonc@gmail.com</p>
              </div>
              
              <div className='header-single-info'>
                <h4>Phone</h4>
                <p>(81) 9 9768-8104</p>
              </div>
              
              <div className='header-single-info'>
                <h4>Location</h4>
                <p>Pernambuco, BR</p>
              </div>
            </div>
          </div>

          <div className='header-bg'></div>
          
        </header>
    );
}