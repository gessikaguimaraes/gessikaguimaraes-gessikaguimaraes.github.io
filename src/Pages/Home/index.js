import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import dados from '../../dados.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import About from '../About';
import Projects from '../Projects';
import Experiencia from '../Experiencia';

function Home() {
    return (
        <div>
            <Header />
            {/* Seção 1 - Apresentação(Home)*/}
            <section id="home">
                <div className='container d-flex justify-content-center conteudo'>
                    <div className='row'>
                        <div className='apresentacao'>
                            Olá! Meu nome é
                        </div>
                        {/* Colocar letra maior para dar destaque */}
                        <h2 className='nome'>Géssika</h2>
                        {/* Colocar aqui letra normal colocar breve resumo */}
                        <div className='texto'>
                            <p>Sou desenvolvedora de software apaixonada pela arte da inovação.</p>
                            <p>
                                Atualmente trabalho na empresa Estefanini como desenvolvedora FullStack.
                            </p>
                            <p>
                                Em busca de desenvolvimento de minhas habilidades em Frontend.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Seção 2 - Sobre */}
            <section id='sobre'>
                <About />
            </section>
            {/* Seção 3 - Experiencias */}
            <section id='experiencias'>
                <Experiencia />
            </section>
            {/* Seção 4 - Projetos */}
            <section id='projetos'>
                <Projects />
            </section>
            {/* <div style={{ height: '100vh' }} className='text-white'>Conteudo</div> */}
            <Footer />
        </div >
    );
}

export default Home;