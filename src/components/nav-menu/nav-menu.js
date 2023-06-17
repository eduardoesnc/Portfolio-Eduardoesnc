import React, {useState} from "react";

import './nav-menu.css';

function NavMenu({acao}){

    const [active, setMode] = useState(false);
    const ToggleMode = () =>{
        setMode(!active);
    }
    
    return (
    <div>
        <div className={ acao ? 'nav-active' : 'nav'}>
            <div className='nav-elements'>
                <div className="nav-logo">
                    <p>LOGO</p>
                </div>

                <div className="nav-links">
                    <a href='#about'>Quem Sou?</a>
                    <a href='#resume'>Currículo</a>
                    <a href='#skills'>Habilidades</a>
                    <a href='#services'>Serviços</a>
                    <a href='#portfolio'>Portfólio</a>
                    <a href='#contact'>Contato</a>
                </div>

                <div className={active ? "iconNav iconActive" : 'iconNav'} onClick={ToggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
            </div>
                <div className={(active && acao) ? "scrollMenu scrollMenuOpen" : "scrollMenu scrollMenuClose"}>
                    <div className="nav-links-scrollMenu">
                        <a href='#about'>Quem Sou?</a>
                        <a href='#resume'>Currículo</a>
                        <a href='#skills'>Habilidades</a>
                        <a href='#services'>Serviços</a>
                        <a href='#portfolio'>Portfólio</a>
                        <a href='#contact'>Contato</a>
                    </div>
                </div>
    
                <div className={(active && !acao) ? 'menu menuOpen' : 'menu menuClose'}>
                    <div className="nav-links-burguer">
                        <a href='#about'>Quem Sou?</a>
                        <a href='#resume'>Currículo</a>
                        <a href='#skills'>Habilidades</a>
                        <a href='#services'>Serviços</a>
                        <a href='#portfolio'>Portfólio</a>
                        <a href='#contact'>Contato</a>
                    </div>
                </div>
            
        </div>
    </div>
    );
}

export default NavMenu;