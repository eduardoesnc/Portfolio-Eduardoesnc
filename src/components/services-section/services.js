import React from "react";
import './services.css';

import { FaDesktop, FaCogs, FaChartBar, FaMobileAlt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";


export function Services() {
    return (
        <section className='services' id="services">
            <div className='section-heading'>
                <h2 className='section-title'>
                    My Services
                    <span className="title-bg">Services</span>
                </h2>
            </div>

            <div className='row'>
                <div className='col-services'>
                    <div className='card-services'>
                        <i><FaDesktop /></i>
                        <h6>Web Development</h6>
                        <p>I develop modern and responsive websites using the latest technologies and best practices.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                        <i><FaMobileAlt /></i>
                        <h6>Mobile Development</h6>
                        <p>I create custom mobile applications, focusing on usability and elegant design.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                        <i><MdDesignServices /></i>
                        <h6>Design</h6>
                        <p>I create attractive and functional designs, focused on user experience and brand identity.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                        <i><FaCogs /></i>
                        <h6>System Optimization</h6>
                        <p>Optimizing existing systems through detailed analysis and implementation of improvements.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                        <i><FaChartBar /></i>
                        <h6>Data Analysis</h6>
                        <p>In-depth data analysis to extract valuable insights and support strategic decision-making.</p>
                    </div>
                </div>
                
                <div className='col-services'>
                    <div className='card-services'>
                        <i><GiBrain /></i>
                        <h6>Machine Learning</h6>
                        <p>I use advanced ML techniques to develop predictive models and intelligent solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
