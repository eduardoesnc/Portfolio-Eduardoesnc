import React from "react";

import './banner.css';

export function Banner(){
    
    return (
        <section className='banner-section'>
            <div className='banner'>

                <div className='banner-part'>
                    <div className='banner-part-content'>
                    <p>2<span>+</span></p>
                    </div>
                </div>

                <div className='banner-part'>
                    <div className='banner-part-content'>
                    <h3>Anos de Experiência</h3>
                    </div>
                </div>

                <div className='banner-part'>
                    <div className='banner-part-content'>
                    <p>20<span>+</span></p>
                    </div>
                </div>

                <div className='banner-part'>
                    <div className='banner-part-content'>
                    <h3>Projetos Finalizados</h3>
                    </div>
                </div>

                <div className='banner-part'>
                    <div className='banner-part-content'>
                    <p>5<span>+</span></p>
                    </div>
                </div>

                <div className='banner-part'>
                    <div className='banner-part-content'>
                    <h3>Clientes ao redor do mundo</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}