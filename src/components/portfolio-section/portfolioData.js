import { FaDesktop, FaMobileAlt, FaChartBar} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import carInsurance from '../../assets/portfolioImgs/carInsurance.jpg';
import insurancetech from '../../assets/portfolioImgs/insuranceTech.jpg';
import charmeDaVila from '../../assets/portfolioImgs/charmeDaVila.jpg';
import ekosNoronha from '../../assets/portfolioImgs/ekosNoronha.jpg';
import colinaPousadaSpa from '../../assets/portfolioImgs/colinaPousadaSpa.jpg';
import imersaoMP from '../../assets/portfolioImgs/imersaoMP.jpg';
import laferlins from '../../assets/portfolioImgs/laferlins.jpg';
import cjr from '../../assets/portfolioImgs/cjr.jpg';
import cint from '../../assets/portfolioImgs/cint.jpg';
import hamares from '../../assets/portfolioImgs/hamares.jpg';
import benetti from '../../assets/portfolioImgs/benetti.jpg';

const portfolioData = [
    {
        type: 'Web',
        name: 'Imersão Marca Própria 2022',
        imgUrl: imersaoMP,
        description: 'Durante o desenvolvimento da Landing Page do evento "Imersão Marca Própria 2022", participei integralmente na responsividade do site, garantindo uma experiência consistente e atraente para os usuários em diferentes dispositivos e tamanhos de tela. Fui responsável por adaptar parte do design e das funcionalidades do site, assegurando que todas as informações e elementos gráficos fossem apresentados de forma otimizada em smartphones, tablets e desktops. Por meio de testes rigorosos em diferentes dispositivos e resoluções, pude identificar e corrigir quaisquer problemas de usabilidade, garantindo que todos os visitantes tivessem acesso às informações do evento de forma clara e sem obstáculos.',
        icon: FaDesktop,
        pjtUrl: 'https://imersaomarcapropria.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Laferlins',
        imgUrl: laferlins,
        description: 'No projeto para a Liferlins, tiver participação no desenvolvimento da versão em Inglês do site, onde pudemos transmitir com precisão os serviços de intermediação e monitoramento de contratos da empresa nos setores de algodão, açúcar, etanol e combustíveis. Através de uma abordagem meticulosa, colaboração efetiva com a equipe da Laferlins e garantia de qualidade, foi possível realizar uma tradução fluida que expandiu o alcance da Laferlins, permitindo que eles se conectassem ainda mais com um público internacional e fortalecessem sua presença global no mercado de commodities.',
        icon: FaDesktop,
        pjtUrl: 'https://laferlins.com.br/english/',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Benetti Interiores',
        imgUrl: benetti,
        description: 'O desenvolvimento da vitrine online da Benetti Interiores foi uma oportunidade empolgante para destacar a sofisticação e a qualidade dos produtos oferecidos pela empresa. Com um design moderno e funcional, focamos em criar uma experiência de usuário envolvente e intuitiva. A plataforma é totalmente responsiva, permitindo uma navegação suave em qualquer dispositivo, e inclui recursos detalhados de visualização de produtos, facilitando aos clientes explorar a variedade de itens disponíveis. Além disso, criamos um blog integrado à plataforma, fornecendo conteúdo relevante e inspirador sobre design de interiores, dicas de decoração e as últimas tendências do mercado. Este recurso adicional não apenas enriquece a experiência do usuário, mas também posiciona a Benetti Interiores como uma autoridade no setor, engajando os visitantes e incentivando-os a retornar ao site.',
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
        description: 'O projeto do website do Grupo EKOS foi uma ótima oportunidade para mostrar a elegância de Fernando de Noronha. Com um design envolvente e sofisticado e o foco na funcionalidade e experiência do usuário, desenvolvemos um site responsivo e intuitivo, com recursos de reserva online e informações detalhadas sobre as deslumbrantes atrações e atividades oferecidas em Fernando de Noronha, proporcionando aos visitantes uma visão completa das maravilhas que aguardam sua visita. Trabalhando em parceria com a equipe do Grupo EKOS, conseguimos transmitir com precisão a exclusividade e o requinte das propriedades, resultando em uma plataforma que convida os visitantes a descobrirem a magia de Fernando de Noronha.',
        icon: FaDesktop,
        pjtUrl: 'https://noronha.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Hamares Boutique Hotel',
        imgUrl: hamares,
        description: 'O projeto da Hamares Boutique Hotel foi uma excelente oportunidade para destacar a sofisticação e o charme desse exclusivo hotel. Com um design elegante e contemporâneo, focamos na criação de uma experiência de usuário intuitiva e agradável. Desenvolvemos um site responsivo que inclui recursos de reserva online e informações detalhadas sobre os serviços e comodidades oferecidos pelo hotel, proporcionando aos visitantes uma visão clara e atraente do que os aguarda na Hamares Boutique Hotel. Colaborando estreitamente com a equipe do hotel, conseguimos capturar e transmitir a essência da hospitalidade e do luxo que definem a Hamares, resultando em uma plataforma digital que convida os usuários a explorar e reservar sua estadia com facilidade e confiança.',
        icon: FaDesktop,
        pjtUrl: 'https://hamares.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Colina Pousada Spa',
        imgUrl: colinaPousadaSpa,
        description: 'Através do serviço de manutenções, tive a oportunidade de contribuir para o sucesso do website da Colina Pousada Spa, uma joia do grupo EKOS. Nesta emocionante jornada, trabalhamos diligentemente para garantir que a plataforma online refletisse a excelência e o luxo oferecidos pela pousada. Com atenção meticulosa aos detalhes, realizei aprimoramentos e ajustes contínuos, assegurando que o site estivesse sempre em perfeitas condições, proporcionando uma experiência de navegação suave e encantadora para os visitantes.',
        icon: FaDesktop,
        pjtUrl: 'https://pousadacolinanoronha.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Web',
        name: 'Charme Da Vila',
        imgUrl: charmeDaVila,
        description: 'O projeto do website Charme da Vila foi uma jornada apaixonante, resultando em uma plataforma online envolvente e funcional. Com um design que combina elegância e rusticidade, o site transmite a atmosfera acolhedora da pousada. Utilizando o WordPress como base, implementamos, uma navegação intuitiva e uma estrutura que destaca cada aspecto da pousada. A parceria com a equipe do Charme da Vila foi fundamental para superar expectativas e criar um espaço virtual que convida os visitantes a descobrirem o encanto dessa pousada especial.',
        icon: FaDesktop,
        pjtUrl: 'https://charmedavila.com.br',
        techUsed: 'Wordpress.'
    },
    {
        type: 'Mobile',
        name: 'InsuranceTech',
        imgUrl: insurancetech,
        description: 'Este projeto foi realizado durante a disciplina de Desenvolvimento de Sistemas de Informação na UFRPE. O objetivo central foi criar uma aplicação que utilizasse técnicas de Machine Learning, baseada em um dataset selecionado pela equipe. O aplicativo possui diversas funcionalidades, incluindo a previsão de possibilidade de reivindicação de seguro automotivo, um mapa interativo de sinistros, análises gráficas dos dados e a funcionalidade de upload de documentos necessários para a reivindicação do seguro. Essas características tornam o aplicativo útil tanto para seguradoras quanto para segurados, proporcionando uma experiência mais eficiente e conveniente.',
        icon: FaMobileAlt,
        pjtUrl: 'https://github.com/eduardoesnc/InsuranceTech',
        techUsed: 'Dart, Flutter, Firebase.'
    },
    {
        type: 'Mobile',
        name: 'Cint',
        imgUrl: cint,
        description: 'Este projeto foi realizado durante a disciplina de Projetos para Sistemas de Informação III, nele foi desenvolvido uma aplicação inovadora para abordar a pobreza extrema e a falta de moradia e a ODS 11 da ONU, utilizando técnicas de design centradas no usuário. O aplicativo facilita a doação e a recepção de assistência com funcionalidades como gamificação, recomendação customizada de ONGs, oferta de produtos, metas de doação, parcerias com aplicativos de entrega, etc. A abordagem Human-Centered Design (HCD) permitiu compreender profundamente as necessidades das pessoas e organizações afetadas, resultando em soluções mais eficazes. O projeto identificou oportunidades de inovação e melhorias futuras, como o estudo do impacto das funcionalidades nas doações e um sistema de voluntariado. O aplicativo tem o potencial de transformar a assistência social, promovendo um ambiente mais acolhedor e digno para os necessitados, e oferece uma ferramenta poderosa para instituições dedicadas ao combate à pobreza.',
        icon: FaMobileAlt,
        pjtUrl: 'https://github.com/gui-henri/cint',
        techUsed: 'Dart, Flutter, Supabase.'
    },
    {
        type: 'Dados',
        name: 'Previsão de reivindicação de seguros automotivos',
        imgUrl: carInsurance,
        description: 'Este projeto foi desenvolvido como parte da disciplina de Projetos Interdisciplinares para Sistemas de Informação 3 na UFRPE. O objetivo principal deste projeto é criar um dashboard que permita explorar e analisar um conjunto de dados de clientes de uma seguradora de automóveis, e desenvolver um modelo de Machine Learning capaz de prever se um cliente fará uma reclamação de seguro. Visando contribuir para a redução de riscos, o aumento da eficiência operacional e a melhoria geral dos serviços de uma seguradora automotiva.',
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