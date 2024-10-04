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
                    <p><a href='#header'>ESNC</a></p>
                </div>

                <div className="nav-links">
                    <a href='#about'>Who Am I?</a>
                    <a href='#resume'>Resume</a>
                    <a href='#skills'>Skills</a>
                    <a href='#services'>Services</a>
                    <a href='#portfolio'>Portfolio</a>
                    <a href='#contact'>Contact</a>
                </div>

                <div className={active ? "iconNav iconActive" : 'iconNav'} onClick={ToggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
            </div>
                <div className={(active && acao) ? "scrollMenu scrollMenuOpen" : "scrollMenu scrollMenuClose"}>
                    <div className="nav-links-scrollMenu">
                        <a href='#about'>Who Am I?</a>
                        <a href='#resume'>Resume</a>
                        <a href='#skills'>Skills</a>
                        <a href='#services'>Services</a>
                        <a href='#portfolio'>Portfolio</a>
                        <a href='#contact'>Contact</a>
                    </div>
                </div>
    
                <div className={(active && !acao) ? 'menu menuOpen' : 'menu menuClose'}>
                    <div className="nav-links-burguer">
                        <a href='#about'>Who Am I?</a>
                        <a href='#resume'>Resume</a>
                        <a href='#skills'>Skills</a>
                        <a href='#services'>Services</a>
                        <a href='#portfolio'>Portfolio</a>
                        <a href='#contact'>Contact</a>
                    </div>
                </div>
            
        </div>
    </div>
    );
}

export default NavMenu;