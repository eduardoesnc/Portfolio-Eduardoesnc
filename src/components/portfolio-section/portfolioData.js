import { FaDesktop, FaMobileAlt} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import carInsurance from '../../assets/portfolioImgs/carInsurance.jpg';
import insurancetech from '../../assets/portfolioImgs/insuranceTech.jpg';
import charmeDaVila from '../../assets/portfolioImgs/charmeDaVila.jpg';
import ekosNoronha from '../../assets/portfolioImgs/ekosNoronha.jpg';
import colinaPousadaSpa from '../../assets/portfolioImgs/colinaPousadaSpa.jpg';
import imersaoMP from '../../assets/portfolioImgs/imersaoMP.jpg';
import laferlins from '../../assets/portfolioImgs/laferlins.jpg';
// import cjr from '../../assets/portfolioImgs/cjr.jpg';
import cint from '../../assets/portfolioImgs/cint.jpg';
import hamares from '../../assets/portfolioImgs/hamares.jpg';
import benetti from '../../assets/portfolioImgs/benetti.jpg';

const portfolioData = [
    {
        type: 'Web',
        name: 'Imersão Marca Própria 2022',
        imgUrl: imersaoMP,
        description: 'During the development of the landing page for the "Private Label Immersion 2022" event, I was fully involved in ensuring the responsiveness of the site, guaranteeing a consistent and attractive experience for users across different devices and screen sizes. I was responsible for adapting part of the design and functionalities of the site, ensuring that all information and graphic elements were presented optimally on smartphones, tablets, and desktops. Through rigorous testing on different devices and resolutions, I was able to identify and fix any usability issues, ensuring that all visitors could access event information clearly and without obstacles.',
        icon: FaDesktop,
        pjtUrl: 'https://imersaomarcapropria.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Laferlins',
        imgUrl: laferlins,
        description: 'In the project for Laferlins, I participated in developing the English version of the website, where we accurately conveyed the company’s services in contract mediation and monitoring in the cotton, sugar, ethanol, and fuel sectors. Through meticulous approach, effective collaboration with the Laferlins team, and quality assurance, we achieved a smooth translation that expanded Laferlins’ reach, enabling them to connect even more with an international audience and strengthen their global presence in the commodities market.',
        icon: FaDesktop,
        pjtUrl: 'https://laferlins.com.br/english/',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Benetti Interiores',
        imgUrl: benetti,
        description: 'The development of the online showcase for Benetti Interiores was an exciting opportunity to highlight the sophistication and quality of the products offered by the company. With a modern and functional design, we focused on creating an engaging and intuitive user experience. The platform is fully responsive, allowing for smooth navigation on any device and includes detailed product viewing features, making it easy for customers to explore the variety of available items. Additionally, we created a blog integrated into the platform, providing relevant and inspiring content on interior design, decorating tips, and the latest market trends. This additional resource not only enriches the user experience but also positions Benetti Interiores as an authority in the sector, engaging visitors and encouraging them to return to the site.',
        icon: FaDesktop,
        pjtUrl: 'https://www.benettirecife.com.br',
        techUsed: 'Wordpress.'
    },
    // {
    //     type: 'Web',
    //     name: 'CJR Cabines de Pintura',
    //     imgUrl: cjr,
    //     description: 'O projeto das Landing Pages para a CJR Cabines de Pintura foi uma oportunidade empolgante para evidenciar a excelência e diversidade de suas cabines. Com foco na experiência do usuário, desenvolvemos três Landing Pages responsivas e intuitivas, cada uma para um tipo específico de cabine: Automotiva, Industrial e Moveleira. Otimizadas para mecanismos de busca, essas páginas atraem mais visitantes qualificados e incentivam a conversão em negócios reais. Agora, as Landing Pages personalizadas refletem a excelência da CJR e oferecem aos visitantes uma interação envolvente e valiosa.',
    //     icon: FaDesktop,
    //     pjtUrl: 'https://cjrcabinesdepintura.com.br/cabine-de-pintura-automotiva/',
    //     techUsed: 'Wordpress.'
    // },
    {
        type: 'Web',
        name: 'Ekos Luxury Hotels',
        imgUrl: ekosNoronha,
        description: 'The website project for the EKOS Group was a great opportunity to showcase the elegance of Fernando de Noronha. With an engaging and sophisticated design focusing on functionality and user experience, we developed a responsive and intuitive site, featuring online booking and detailed information about the stunning attractions and activities offered in Fernando de Noronha, providing visitors with a complete view of the wonders awaiting their visit. Working in partnership with the EKOS Group team, we accurately conveyed the exclusivity and refinement of the properties, resulting in a platform that invites visitors to discover the magic of Fernando de Noronha.',
        icon: FaDesktop,
        pjtUrl: 'https://noronha.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Hamares Boutique Hotel',
        imgUrl: hamares,
        description: 'The Hamares Boutique Hotel project was an excellent opportunity to highlight the sophistication and charm of this exclusive hotel. With an elegant and contemporary design, we focused on creating an intuitive and enjoyable user experience. We developed a responsive site that includes online booking features and detailed information about the services and amenities offered by the hotel, providing visitors with a clear and attractive view of what awaits them at Hamares Boutique Hotel. By closely collaborating with the hotel team, we managed to capture and convey the essence of the hospitality and luxury that define Hamares, resulting in a digital platform that invites users to explore and book their stay with ease and confidence.',
        icon: FaDesktop,
        pjtUrl: 'https://hamares.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Colina Pousada Spa',
        imgUrl: colinaPousadaSpa,
        description: 'Through maintenance services, I had the opportunity to contribute to the success of the Colina Pousada Spa website, a gem of the EKOS group. In this exciting journey, we worked diligently to ensure that the online platform reflected the excellence and luxury offered by the inn. With meticulous attention to detail, I carried out continuous enhancements and adjustments, ensuring that the site was always in perfect condition, providing a smooth and delightful browsing experience for visitors.',
        icon: FaDesktop,
        pjtUrl: 'https://pousadacolinanoronha.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Charme Da Vila',
        imgUrl: charmeDaVila,
        description: 'The Charme da Vila website project was an exciting journey, resulting in an engaging and functional online platform. With a design that combines elegance and rusticity, the site conveys the cozy atmosphere of the inn. Using WordPress as a base, we implemented intuitive navigation and a structure that highlights every aspect of the inn. The partnership with the Charme da Vila team was crucial to exceed expectations and create a virtual space that invites visitors to discover the charm of this special inn.',
        icon: FaDesktop,
        pjtUrl: 'https://charmedavila.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Mobile',
        name: 'InsuranceTech',
        imgUrl: insurancetech,
        description: 'This project was conducted during the Information Systems Development course at UFRPE. The main goal was to create an application that utilized Machine Learning techniques, based on a dataset selected by the team. The app features various functionalities, including the prediction of the likelihood of automotive insurance claims, an interactive claims map, graphical data analysis, and the ability to upload necessary documents for insurance claims. These features make the application useful for both insurers and insured parties, providing a more efficient and convenient experience.',
        icon: FaMobileAlt,
        pjtUrl: 'https://github.com/eduardoesnc/InsuranceTech',
        techUsed: 'Dart, Flutter, Firebase.'
    },
    {
        type: 'Mobile',
        name: 'Cint',
        imgUrl: cint,
        description: 'This project was conducted during the Information Systems Projects III course, where an innovative application was developed to address extreme poverty, homelessness, and the UN’s SDG 11, utilizing user-centered design techniques. The app facilitates the donation and reception of assistance with features such as gamification, customized NGO recommendations, product offerings, donation goals, partnerships with delivery apps, etc. The Human-Centered Design (HCD) approach allowed us to deeply understand the needs of affected individuals and organizations, resulting in more effective solutions. The project identified opportunities for innovation and future improvements, such as studying the impact of the features on donations and a volunteer system. The app has the potential to transform social assistance, fostering a more welcoming and dignified environment for those in need, and provides a powerful tool for institutions dedicated to combating poverty.',
        icon: FaMobileAlt,
        pjtUrl: 'https://github.com/gui-henri/cint',
        techUsed: 'Dart, Flutter, Supabase.'
    },
    {
        type: 'Dados',
        name: 'Automotive Insurance Claim Prediction',
        imgUrl: carInsurance,
        description: 'This project was developed as part of the Interdisciplinary Projects for Information Systems 3 course at UFRPE. The main objective of this project is to create a dashboard that allows exploring and analyzing a dataset of customers from an automotive insurance company and to develop a Machine Learning model capable of predicting whether a customer will make an insurance claim. Aiming to contribute to risk reduction, increased operational efficiency, and overall improvement of the services of an automotive insurer.',
        icon: GiBrain,
        pjtUrl: 'https://smd-insurancetech.streamlit.app',
        techUsed: 'Python, Streamlit, Pandas, Scikit-Learn.'
    },
    // {
    //     type: 'Dados',
    //     name: 'Buscar algum projeto de análise de Dados',
    //     imgUrl: carInsurance,
    //     description: 'Este projeto foi desenvolvido como parte da disciplina de Projetos Interdisciplinares para Sistemas de Informação 3 na UFRPE. O objetivo principal deste projeto é criar um dashboard que permita explorar e analisar um conjunto de dados de clientes de uma seguradora de automóveis, e desenvolver um modelo de Machine Learning capaz de prever se um cliente fará uma reclamação de seguro. Visando contribuir para a redução de riscos, o aumento da eficiência operacional e a melhoria geral dos serviços de uma seguradora automotiva.',
    //     icon: FaChartBar,
    //     pjtUrl: 'https://smd-insurancetech.streamlit.app',
    //     techUsed: 'Python, Streamlit, Pandas, Scikit-Learn.'
    // },
    
]

export default portfolioData;