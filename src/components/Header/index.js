import React from 'react';

import { faCode, faHouse, faUser, faFolderOpen, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: 'white', fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faCode} href="" role="button" />
                    </a>
                    <div className="d-flex align-items-center">
                        <a className="btn btn-outline-light btn-floating m-1" href="#home" role="button">
                            <FontAwesomeIcon icon={faHouse} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#sobre" role="button">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#experiencias" role="button">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#projetos" role="button">
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;