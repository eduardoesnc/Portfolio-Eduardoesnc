import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import './header.css';

export function Header(){

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Eduardo Estevão", "Desenvolvedor", "Freelancer"], 
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
            <h2>Olá!</h2>
            <h1>Eu sou <span ref={el}></span></h1>
            <h2>Dando vida às suas ideias</h2>
            <button><a href="#contact">Entre em Contato</a></button>
          

            <div className='header-info'>
              <div className='header-single-info'>
                <h4>Email</h4>
                <p>eduardoestevaonc@gmail.com</p>
              </div>
              
              <div className='header-single-info'>
                <h4>Telefone</h4>
                <p>(81) 9 9768-8104</p>
              </div>
              
              <div className='header-single-info'>
                <h4>Localização</h4>
                <p>Pernambuco, BR</p>
              </div>
            </div>
          </div>

          <div className='header-bg'></div>
          
        </header>
    );
}