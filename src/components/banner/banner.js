import React from "react";

import './banner.css';

export function Banner(){
    
    return (
        <section className='banner-section'>
            <div className='banner'>

                <div className='banner-container'>
                    <div className='banner-part'>
                        <div className='banner-part-content'>
                        <p>2<span>+</span></p>
                        </div>
                    </div>
                


                    <div className='banner-part'>
                        <div className='banner-part-content'>
                        <h3>Years of Experience</h3>
                        </div>
                    </div>
                </div>

                <div className='banner-container'>
                    <div className='banner-part'>
                        <div className='banner-part-content'>
                        <p>15<span>+</span></p>
                        </div>
                    </div>

                    <div className='banner-part'>
                        <div className='banner-part-content'>
                        <h3>Completed Projects</h3>
                        </div>
                    </div>
                </div>

                <div className='banner-container'>
                    <div className='banner-part'>
                        <div className='banner-part-content'>
                        <p>5<span>+</span></p>
                        </div>
                    </div>

                    <div className='banner-part'>
                        <div className='banner-part-content'>
                        <h3>Global Clients</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}