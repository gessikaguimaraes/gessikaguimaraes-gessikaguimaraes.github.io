import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import dados from '../../dados.json';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Experiencia() {
    return (
        <div className='container conteudo'>
            <div className='d-flex'>
                <div className='icone'>
                    <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className='titulo'>Experiencias</div>
                <hr />
            </div>
            {/* <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link tab active" id="v-pills-stefanini-tab" data-bs-toggle="pill" data-bs-target="#v-pills-stefanini" type="button" role="tab" aria-controls="v-pills-stefanini" aria-selected="true">Home</button>
                    <button className="nav-link tab" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Trilog</button>
                    <button className="nav-link tab" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">TJGO</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-stefanini" role="tabpanel" aria-labelledby="v-pills-stefanini-tab">
                        <div className='funcao'>Função</div>
                        <div className='periodo'>Periodo</div>
                        <div>Descricao</div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                </div>
            </div> */}
            <div className="">
                <Tab.Container defaultActiveKey="0">
                    <Row>
                        <Col sm={1}>
                            <Nav variant="pills" className="flex-column">
                                {dados.experiencia.map((item, index) =>
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={index} key={index} className="tab">{item.empresa}</Nav.Link>
                                    </Nav.Item>
                                )}
                            </Nav>
                        </Col>
                        <Col sm={6}>
                            <Tab.Content>
                                {dados.experiencia.map((item, key) =>
                                    <Tab.Pane eventKey={key} key={key} className="tab-pane">
                                        <div className='funcao'>{item.funcao}</div>
                                        <div className='periodo'>{item.periodo}</div>
                                        <div className='experienciaDescricao'>
                                            <ul>
                                                {item.descricao.map((i, index) => <li key={index}>{i}</li>)}
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                )}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
}

export default Experiencia;