import React from "react";

import './resume.css';

export function Resume() {
    
    return (
        <section className='resume' id="resume">
            <div className='section-heading'>
                <h2 className='section-title'>
                    My Resume
                    <span className="title-bg">Resume</span>
                </h2>
            </div>

            <div className='section-card'>
                <div className='cards-resume'>
                    <p className='title-cards-resume'>Education</p>

                    <div className='card-resume'>
                        <span className='item-arrow'></span>
                        <h5>Bachelor's in Information Systems</h5>
                        <p className='card-resume-details'>Universidade Federal Rural de Pernambuco / 2021 - Present</p>
                        <p className='card-resume-description'>
                          I concentrate my studies in the field of Data Science, constantly seeking to improve my
                          skills in data analysis, Machine Learning, and Artificial Intelligence
                        </p>
                    </div>

                    <div className='card-resume'>
                        <span className='item-arrow'></span>
                        <h5>BTEC IT</h5>
                        <p className='card-resume-details'>Bournemouth and Poole College / 2020 - 2020</p>
                        <p className='card-resume-description'>
                            Exchange program conducted through the Win the World program. It was where I developed my English
                            skills and had various experiences in the IT field.</p>
                    </div>

                    <div className='card-resume'>
                        <span className='item-arrow'></span>
                        <h5>Technical in Systems Development</h5>
                        <p className='card-resume-details'>ETE Advogado José David Gil Rodrigues / 2018 - 2020</p>
                        <p className='card-resume-description'>
                            This is where I began my studies in programming and successfully completed an exchange program
                            at Bournemouth and Poole College in the United Kingdom.</p>
                    </div>

                </div>

                <div className='cards-resume'>
                    <p className='title-cards-resume'>Experience</p>
                    
                    <div className='card-resume'>
                        <span className='item-arrow'></span>
                        <h5>Jr. Full Stack Developer</h5>
                        <p className='card-resume-details'>Engenharia de Alta Perfomance / Aug 2024 - Present</p>
                        <p className='card-resume-description'>
                        I developed and refactored the GoBuilder platform, focusing on UX, performance, and scalability 
                        using Next.js, Nest.js, MySQL, AWS, Material UI, and TypeScript. I implemented modern features 
                        (file uploads, quotations, reports, dashboards, and PDFs), optimized legacy code with Clean Code
                        principles, and achieved a 50% reduction in response times. The work was carried out in an agile
                        environment using Scrum.</p>
                    </div>

                    <div className='card-resume'>
                        <span className='item-arrow'></span>
                        <h5>Project Analyst</h5>
                        <p className='card-resume-details'>Seed a Bit Tecnologia / Aug 2023 - Apr 2024</p>
                        <p className='card-resume-description'>
                            I worked voluntarily as a project analyst at the Júnior Seed A Bit Technology company, where I
                            played an essential role in the development of collaborative projects. I contributed to the
                            successful implementation of the E-commerce service in the company, ensuring the integration of
                            innovative technologies and best practices.</p>
                    </div>

                    <div className='card-resume'>
                        <span className='item-arrow'></span>
                        <h5>Web Developer - Freelancer</h5>
                        <p className='card-resume-details'>Agência Walsa / Fev 2022 - Dec 2022</p>
                        <p className='card-resume-description'>
                            I developed and maintained websites for important clients of the agency, utilizing skills in
                            programming and design in collaboration with the team. These experiences enhanced my web
                            development, digital marketing, and personalized customer service skills.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
