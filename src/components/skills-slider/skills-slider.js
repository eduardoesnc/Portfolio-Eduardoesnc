import React, { Component } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaWordpress, FaGitAlt, FaReact, FaGithub, FaWpforms} from "react-icons/fa"; 
import { SiFlutter, SiTailwindcss, SiPostgresql, SiPandas, SiScikitlearn, SiNumpy, SiPowerbi, SiFirebase,
    SiStyledcomponents, SiElementor, SiWoocommerce, SiYoast} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsInfoCircle } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import Tooltip from '@mui/material/Tooltip';

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
                        <Tooltip title={
                            <div className="tooltip">
                                <h3>Principais bibliotecas:</h3>
                                <ul>
                                    <li>
                                        <i><SiPandas /></i> Pandas
                                    </li>
                                    <li>
                                        <i><SiNumpy /></i> Numpy
                                    </li>
                                    <li>
                                        <i><SiScikitlearn /></i> Scikit-Learn
                                    </li>
                                </ul>
                            </div>
                        } placement="top" arrow enterDelay={300} leaveDelay={100} 
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 35],
                                            },
                                        },
                                    ],
                                },
                            }}
                        >
                            <i>
                                <FaPython/>
                            </i>
                            <p>Python <span style={{fontSize: '12px'}}><BsInfoCircle /></span></p>
                        </Tooltip>
                    </div>

                    <div>
                        <i>
                            <SiPowerbi />
                        </i>
                        <p>PowerBI</p>
                    </div>

                    {/* <div>
                        <i>
                            <FaReact/>
                        </i>
                        <p>React</p>
                    </div> */}

                    <div>
                        <Tooltip title={
                            <div className="tooltip">
                                <h3>Principais bibliotecas e frameworks:</h3>
                                <ul>
                                    <li>
                                        <i><FaReact/></i> ReactJs
                                    </li>
                                    <li>
                                        <i><FaReact/></i> React Native
                                    </li>
                                    <li>
                                        <i><TbBrandNextjs /></i> NextJs
                                    </li>
                                </ul>
                            </div>
                        } placement="top" arrow enterDelay={300} leaveDelay={100}
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 35],
                                            },
                                        },
                                    ],
                                },
                            }}
                        >
                            <i>
                                <FaJsSquare/>
                            </i>
                            <p>JavaScript <span style={{fontSize: '12px'}}><BsInfoCircle /></span></p>
                        </Tooltip>
                    </div>

                    <div>
                        <i>
                            <FaHtml5/>
                        </i>
                        <p>HTML5</p>
                    </div>

                    <div>
                        <Tooltip title={
                            <div className="tooltip">
                                <h3>Principais bibliotecas:</h3>
                                <ul>
                                    <li>
                                        <i><SiTailwindcss /></i> Tailwind
                                    </li>
                                    <li>
                                        <i><SiStyledcomponents /></i> Styled-components
                                    </li>
                                </ul>
                            </div>
                        } placement="top" arrow enterDelay={300} leaveDelay={100}
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 35],
                                            },
                                        },
                                    ],
                                },
                            }}
                        >
                            <i>
                                <FaCss3Alt/>
                            </i>
                            <p>CSS3 <span style={{fontSize: '12px'}}><BsInfoCircle /></span></p>
                        </Tooltip>
                    </div>

                    <div>
                        <Tooltip title={
                            <div className="tooltip">
                                <h3>Principais plugins e ferramentas:</h3>
                                <ul>
                                    <li>
                                        <i><SiElementor /></i> Elementor
                                    </li>
                                    <li>
                                        <i><SiWoocommerce /></i> WooCommerce
                                    </li>
                                    <li>
                                        <i><SiYoast /></i> Yoast SEO
                                    </li>
                                    <li>
                                        <i><FaWpforms /></i> WPForms
                                    </li>
                                    <li>
                                        ...
                                    </li>
                                </ul>
                            </div>
                        } placement="top" arrow enterDelay={300} leaveDelay={100}
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 35],
                                            },
                                        },
                                    ],
                                },
                            }}
                        >
                            <i>
                                <FaWordpress/>
                            </i>
                            <p>Wordpress <span style={{fontSize: '12px'}}><BsInfoCircle /></span></p>
                        </Tooltip>
                    </div>

                    <div>
                        <i>
                            <SiFlutter/>
                        </i>
                        <p>Flutter</p>
                    </div>

                    <div>
                        <i>
                            <GrMysql />
                        </i>
                        <p>MySQL</p>
                    </div>

                    <div>
                        <i>
                            <SiPostgresql />
                        </i>
                        <p>PostgreSQL</p>
                    </div>    

                    <div>
                        <i>
                            <SiFirebase />
                        </i>
                        <p>Firebase</p>
                    </div>

                    <div>
                        <i>
                            <FaGitAlt/>
                        </i>
                        <p>Git</p>
                    </div>

                    <div>
                        <i>
                            <FaGithub />
                        </i>
                        <p>Github</p>
                    </div>
                    
                </div>
            </div>
        </section>
      );
    }
  }