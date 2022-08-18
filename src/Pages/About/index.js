import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faJava } from '@fortawesome/free-brands-svg-icons'
import dados from '../../dados.json'

function About() {
    return (
        <div className='container conteudo'>
            <div className='d-flex'>
                <div className='icone '>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className='titulo'>Sobre</div>
                <div className=''>
                    <hr />
                </div>
            </div>
            <div className='texto'>
                {dados.sobre.descricao.map((item, index) => <p key={index}>{item}</p>)}
                {/* Colocar imagens da tecnologia, talvez com explicações */}
                {/* <p>Habilidades e Competências:</p> */}
                <ul className='ul_tecnologias'>
                    {/* <li className='tecnologias'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </li>
                    <li className='tecnologias'>
                        <FontAwesomeIcon icon={faCss3Alt} />
                    </li>
                    <li className='tecnologias'>
                        <FontAwesomeIcon icon={faJsSquare} />
                    </li>
                    <li className='tecnologias'>
                        <FontAwesomeIcon icon={faReact} />
                    </li>
                    <li className='tecnologias'>
                        <FontAwesomeIcon icon={faJava} />
                    </li> */}
                    {dados.sobre.tecnologias.map((item, key) => <li key={key} className="li_tecnologias text-nowrap">{item} </li>)}
                </ul>
            </div>
        </div>
    );
}

export default About;