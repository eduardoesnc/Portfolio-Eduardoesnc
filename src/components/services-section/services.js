import React from "react";
import './services.css';

import { FaDesktop, FaCogs, FaChartBar, FaMobileAlt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";


export function Services(){
    
    return (
        <section className='services' id="services">
            <div className='section-heading'>
                <h2 className='section-title'>
                    Meus Serviços
                    <span class="title-bg">Serviços</span>
                </h2>
            </div>

            <div className='row'>
                <div className='col-services'>
                    <div className='card-services'>
                    <i><FaDesktop /></i>
                    <h6>Desenvolvimento Web</h6>
                    <p>Desenvolvo websites modernos e responsivos com tecnologias e práticas mais atuais.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                    <i><FaMobileAlt/></i>
                    <h6>Desenvolvimento Mobile</h6>
                    <p>Desenvolvo aplicativos móveis personalizados, com foco na usabilidade e design elegante.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                    <i><MdDesignServices /></i>
                    <h6>Design</h6>
                    <p>Crio designs atraentes e funcionais, focados na experiência do usuário e na identidade visual da marca.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                    <i><FaCogs /></i>
                    <h6>Otimização de Sistemas</h6>
                    <p>Otimização de sistemas existentes por meio de análise detalhada e implementação de melhorias.</p>
                    </div>
                </div>

                <div className='col-services'>
                    <div className='card-services'>
                    <i><FaChartBar /></i>
                    <h6>Análise de Dados</h6>
                    <p>Análises de dados detalhadas para extrair insights valiosos e apoiar a tomada de decisões estratégicas.</p>
                    </div>
                </div>
                
                <div className='col-services'>
                    <div className='card-services'>
                    <i><GiBrain /></i>
                    <h6>Machine Learning</h6>
                    <p>Utilizo técnicas avançadas de ML para desenvolver modelos preditivos e soluções inteligentes.</p>
                    </div>
                </div>
            
            </div>

        </section>
    );
}