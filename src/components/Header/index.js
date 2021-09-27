import React from 'react';
import styles  from  './styles.css';

export function Header() {

    return (
                <nav className="NavbarItens">
                <img src="Images/logo-corebiz-white.svg" />
                            <div className="menu-itens"> 
                            
                            </div>
                            <ul className="menu">
                                <li>
                                    <a  href='https://www.corebiz.ag/pt/about/'> a corebiz </a>
                                </li>
                                <li>
                                    <a  href='https://www.corebiz.ag/pt/about/'> serviços </a>
                                </li>
                                <li>
                                 <a  href='https://www.corebiz.ag/pt/cases/'> cases </a>    
                                </li>
                                <li>  
                                <a  href='https://www.corebiz.ag/pt/contato/'> contato  </a>
                                </li> 
                            </ul>
             </nav>
            );
        }

export default Header; 