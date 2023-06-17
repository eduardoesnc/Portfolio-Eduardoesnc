import React, { Component } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaWordpress, FaGitAlt, FaReact} from "react-icons/fa"; 
import { SiFlutter } from "react-icons/si";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './skills-slider.css';

export class SkillsSlider extends Component {
    render() {
      return (
        <section className='skills' id="skills">
            <div className='section-heading'>
            <h2 className='section-title'>
                Minhas Habilidades
                <span class="title-bg">Habilidades</span>
            </h2>
            </div>
            <div className="slider-skills">
                <div className="skills-wrapper">
                    <div>
                        <i>
                            <FaHtml5/>
                        </i>
                        <p>HTML5</p>
                    </div>
                    <div>
                        <i>
                            <FaCss3Alt/>
                        </i>
                        <p>CSS3</p>
                    </div>
                    <div>
                        <i>
                            <FaJsSquare/>
                        </i>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <i>
                            <FaPython/>
                        </i>
                        <p>Python</p>
                    </div>
                    <div>
                        <i>
                            <FaWordpress/>
                        </i>
                        <p>Wordpress</p>
                    </div>
                    <div>
                        <i>
                            <FaGitAlt/>
                        </i>
                        <p>Git</p>
                    </div>
                    <div>
                        <i>
                            <FaReact/>
                        </i>
                        <p>React</p>
                    </div>
                    <div>
                        <i>
                            <SiFlutter/>
                        </i>
                        <p>Flutter</p>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }