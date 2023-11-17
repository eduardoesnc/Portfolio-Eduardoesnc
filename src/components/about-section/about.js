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
                <h3>Quem sou?</h3>
                <h2>Eu sou Eduardo Estevão, entusiasta das áreas de Front-End e Ciência de Dados</h2>
                <p>Estudante de Sistemas de Informação na Universidade Federal Rural de Pernambuco (UFRPE) com formação em Técnico em Desenvolvimento de Sistemas. Apaixonado pelas áreas de Front-End e Ciência de Dados, tenho experiência em projetos de desenvolvimento de sistemas, trabalhando em equipe e seguindo metodologias ágeis. Estou aberto a oportunidades de aprendizado e colaboração, pronto para enfrentar novos desafios e fazer a diferença no mundo da tecnologia.</p>
                
                <div className='horizontal-divisor'></div>

                <div className='about-info-containers'>

                    <div className='about-info-line'>
                    <p><span>Nome:</span>Eduardo Estevão</p>
                    <p><span>Idade:</span> 20</p>
                    </div>

                    <div className='about-info-line'>
                    <p><span>De:</span> Recife - PE</p>
                    <p><span>Email:</span> eduardoestevaonc@gmail.com</p>
                    </div>
                </div>
                <div className="button-wrapper">
                    <a href="https://drive.google.com/file/d/1YeM_zZ1ubiN42azMK6nBXB0JkBBecuUt/view?usp=sharing" target="__blank">Baixar CV</a>
                </div>
            </div>

        </section>
    );
}