import React from 'react'
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg'
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

function Landing(){
    //usar o Link ao inves do <a> para não ter que recarregar novamente a pag ao trocar
    return(
        <div id="page-landing">
            <div className="content-wrapper">
            <img src={logoImg} alt="Happy"></img>
            <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>
            <div className="location">
            <strong>Lavras</strong>
            <span>Minas gerais</span>
            </div>
            <Link to="/orfanato" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
            </Link>
            </div>
        </div>
    );
}

export default Landing;