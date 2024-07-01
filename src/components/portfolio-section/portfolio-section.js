import React from "react";
import {useState } from "react";

import portfolioData from './portfolioData';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './portfolio-section.css';

const Modal = ({ project, closeModal }) => {
    return (
      <div className="modal">
        
        <div className="modal-content">
        <span className="close-modal" onClick={closeModal}>X</span>
          <div className="modal-img">
            <img className='img-fluid' src={project.imgUrl} alt={project.name}></img>
          </div>
          <div className="modal-infos">
            <h4>{project.type}</h4>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className='horizontal-divisor'></div>
            <div className='project-info-containers'>

                    <div className='project-info-line'>
                    <p><span>Tecnologias Utilizadas:</span>{project.techUsed}</p>
                    </div>

                </div>
            <div className="button-wrapper-modal">
                <a href={project.pjtUrl} target="__blank">Visitar projeto</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export function PortfolioSection(){
    
    const [portfolioSel, setPortfolioSel] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    function isPortfolioSelected(actual) {
        if(actual === portfolioSel){
            return {color: '#009E66', borderBottom: '1px solid #009e66', filter: 'brightness(1.2)'};
        }
        else{
            return {};
        }
    }


    const renderProjectIcon = (ProjectIcon) => {
        return <ProjectIcon />;
    };

    const openModal = (project) => {
        setSelectedProject(project);
    };
    
    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
    <section className='portfolio' id="portfolio">
        <div className='section-heading'>
          <h2 className='section-title'>
            Meu Portfólio
            <span class="title-bg">Portfólio</span>
          </h2>
        </div>

        <div className='portfolio-nav'>
            <p 
                style={isPortfolioSelected('All')} 
                onClick={() => setPortfolioSel('All')}>
                Todos
            </p>

            <p 
                style={isPortfolioSelected('Web')}
                onClick={() => setPortfolioSel('Web')}>
                Web
            </p>

            <p
                style={isPortfolioSelected('Mobile')}
                onClick={() => setPortfolioSel('Mobile')}>
                Mobile
            </p>

            <p 
                style={isPortfolioSelected('Dados')} 
                onClick={() => setPortfolioSel('Dados')}>
                Dados
            </p>
        </div>

        <div className='portfolio-grid'>

            {portfolioData.map(project => (
                <div className={project.type !== portfolioSel && portfolioSel !== 'All' ? 'single-item-inactive' : 'single-item' } key={project.name}>
                    <p className='portfolio-item' onClick={() => openModal(project)}>
                    <div className='portfolio-wraper'>
                        <img className='img-fluid' src={project.imgUrl} alt={project.name}></img>             
                        <div className='portfolio-item-content'>
                        <i>{renderProjectIcon(project.icon)}</i>
                        <h6 className='content-title'>{project.name}</h6>
                        <span className='quick-view'>Ver mais</span>
                        </div>
                    </div>
                    </p>
                    <div className='portfolio-item-title'>
                    <h4><p onClick={() => openModal(project)}>{project.name}</p></h4>
                    </div>
                </div>
            ))}

        </div>

        {/* <div className='portfolio-button'>
            <a>
                <span className='span-wrapper'>
                <span>All Portfolio </span>
                <span className='icon-button'><FaArrowRight/></span>
                </span>
                
            </a>
        </div> */}

        {selectedProject && <Modal project={selectedProject} closeModal={closeModal} />}
    </section>
    );
}