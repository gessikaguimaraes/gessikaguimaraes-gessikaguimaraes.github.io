import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Card({ dados }, key) {
    return (
        <div className='col-md-4'>
            <div className='card mb-4 shadow text-white rounded border-0' key={key} style={{ background: 'rgb(20 16 44)' }}>
                <div className='icons'>
                    <FontAwesomeIcon icon={faFolderOpen} className='i folder' />
                    <div className=''>
                        {
                            dados.github !== "" ?
                                <a className="btn" href={dados.github} role="button">
                                    <FontAwesomeIcon icon={faGithub} className='i github' />
                                </a>
                                : ""
                        }
                        {
                            dados.app !== "" ?
                                <a className="btn" href={dados.app} role="button">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i github' />
                                </a>
                                : ""
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{dados.nome}</h5>
                    <p className="card-text">{dados.descricao}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <ul className='card-rodape'>
                        {
                            dados.tecnologias.map((item, index) => <li className='lista' key={index}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Card;