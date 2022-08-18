import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonRedeSocial({ dados, icone }) {
    return (
        <a className="btn btn-outline-light btn-floating m-1" href={dados} role="button">
            <FontAwesomeIcon icon={icone} />
        </a>
    );
}

export default ButtonRedeSocial;