import React, { useEffect } from "react";
import eduardoImg from '../../assets/eduardo.jpg';

import './about.css';

export function QuemSou(){

    useEffect(function(){
        
    });
    
    return (
        <section className='about' id="about">

            <div className='about-img'>
                <img src={eduardoImg} alt="eduardoesnc" />
            </div>

            <div className='about-content'>
            <h3>Who am I?</h3>
            <h2>I am Eduardo Estevão, a Front-End and Data Science Enthusiast</h2>
            <p>
                I am a student of Information Systems at the Universidade Federal Rural de Pernambuco (UFRPE), with a background as a Systems Development Technician. Passionate about Front-End and Data Science, I have experience in system development projects, teamwork, and agile methodologies. I am eager to learn, collaborate, and take on new challenges, ready to make a meaningful impact in the world of technology.
            </p>

                
                <div className='horizontal-divisor'></div>

                <div className='about-info-containers'>

                    <div className='about-info-line'>
                    <p><span>Name:</span>Eduardo Estevão</p>
                    <p><span>Age:</span> 21</p>
                    </div>

                    <div className='about-info-line'>
                    <p><span>From:</span> Recife - PE</p>
                    <p><span>Email:</span> eduardoestevaonc@gmail.com</p>
                    </div>
                </div>
                <div className="button-wrapper">
                    <a href="https://drive.google.com/file/d/1uIm6FGV0KzfbiQtb65sWZA5cY4yZ3oOD/view?usp=sharing" target="__blank">Download CV</a>
                </div>
            </div>

        </section>
    );
}