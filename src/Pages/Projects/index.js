import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import dados from '../../dados.json'
import Card from '../../components/Card'

function Projects() {
    return (
        <div className='container conteudo'>
            <div className='d-flex'>
                <div className='icone'>
                    <FontAwesomeIcon icon={faFolderOpen} />
                </div>
                <div className='titulo'>Projetos</div>
                <hr />
            </div>
            <div className='row'>
                {dados.projetos.map((item, key) => <Card key={key} dados={item} />)}
            </div>
        </div>
    );
}

export default Projects;