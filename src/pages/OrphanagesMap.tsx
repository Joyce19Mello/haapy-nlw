import React from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/map-orphanages.css'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                   
                </header>
                <footer>
                    <strong>Lavras</strong>
                    <span> Minas gerais</span>
                </footer>
            </aside>

            <Map 
                center={[-21.2528757,-44.9983504]} 
                zoom={12} 
                style={{width:'100%', height:'100%'}}
            >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            <Link to="" className="create-orphanage">
            <FiPlus size={32} color="fff"></FiPlus>
            </Link>

        </div>
    );
}
export default OrphanagesMap;