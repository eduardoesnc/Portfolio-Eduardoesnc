import React from "react";

import './resume.css';

export function Resume(){
    
    return (
        <section className='resume' id="resume">
        <div className='section-heading'>
          <h2 className='section-title'>
            Meu Currículo
            <span class="title-bg">Currículo</span>
          </h2>
        </div>

        <div className='section-card'>
          <div className='cards-resume'>
            <p className='title-cards-resume'>Educação</p>

            <div className='card-resume'>
              <span className='item-arrow'></span>
              <h5>Bacharelado em Sistemas de Informação</h5>
              <p className='card-resume-details'>Univesidade Federal Rural de Pernambuco / 2021 - Atualmente</p>
              <p className='card-resume-description'>Atualmente curso Sistemas de Informação e minhas principais áreas de interesse estão sendo Ciência de Dados e Inteligência Artificial.</p>
            </div>

            <div className='card-resume'>
              <span className='item-arrow'></span>
              <h5>BTEC IT</h5>
              <p className='card-resume-details'>Bournemouth and Poole College / 2020 - 2020</p>
              <p className='card-resume-description'>Intercâmbio realizado pelo programa Ganhe o Mundo. Foi onde desenvolvi meu inglês e tive diferentes experiências na área de TI.</p>
            </div>

            <div className='card-resume'>
              <span className='item-arrow'></span>
              <h5>Técnico em Desenvolvimento de Sistemas</h5>
              <p className='card-resume-details'>ETE Advogado José David Gil Rodrigues / 2018 - 2020</p>
              <p className='card-resume-description'>Onde comecei meus estudos em programação e consegui realizar um intercâmbio para Bournemouth and Poole College, no Reino Unido.</p>
            </div>

          </div>

          <div className='cards-resume'>
            <p className='title-cards-resume'>Experiência</p>

            <div className='card-resume'>
              <span className='item-arrow'></span>
              <h5>Analista de Projetos</h5>
              <p className='card-resume-details'>Seed a Bit Tecnologia / 2023 - Atualmente</p>
              <p className='card-resume-description'>Voluntariamente participo da Empresa Júnior de tecnologia da UFRPE, onde atuo como Analista de Projetos. Nessa posição, colaboro ativamente para aprimorar minhas Soft e Hard Skills, enquanto mergulho em um ambiente empresarial desafiador e enriquecedor.</p>
            </div>

            <div className='card-resume'>
              <span className='item-arrow'></span>
              <h5>Desenvolvedor Web - Freelancer</h5>
              <p className='card-resume-details'>Agência Walsa / 2022 - 2022</p>
              <p className='card-resume-description'>Desenvolvi e mantive sites para clientes importantes da agência, aprimorando minha capacidade em programação, design e marketing digital.</p>
            </div>

          </div>
        </div>

      </section>
    );
}