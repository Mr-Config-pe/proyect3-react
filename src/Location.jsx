import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    //Estado para Consumir API
    const [rickLocation, setRickLocation] = useState({});

    //Estado para obtener valor de Input
    const [searchId, setSearchId] = useState("");

    //Effect para Traer un numero random del 1 al 126
    useEffect(() => {

        const randomId = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setRickLocation(res.data));

    }, []);

    const idSearch = () => {

        if (searchId === "0") {
            alert("No es un id valido | Escoge uno del 1 al 126")
        } else if (searchId <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
                .then(res => setRickLocation(res.data));
        } else {
            alert("No es un id valido | Escoge uno del 1 al 126")
        }

    }

    // console.log(rickLocation)
    //Funcion para el boton Search

    // console.log(rickLocation); //Imprimir API para ver su contenido

    return (

        <div>
            <div className="header">

                <div className="video-header">
                    <video src="./src/assets/video/mp4/rick-morty-react.mp4" autoplay="true" muted="false" loop="true" poster="https://carontestudio.com/img/contacto.jpg" className='video-intro'></video>
                    <div className="container-intro-video">

                        {/* Para Desktop */}
                        <div className="info-basic2">
                            <h2>{rickLocation.name}</h2>
                            <h3 className='title-type header-h3'>Type : <b className='value-type'>{rickLocation.type}</b></h3>
                            <h3 className='title-dimension header-h3'>Dimension : <b className='value-dimension'>{rickLocation.dimension}</b></h3>
                            <h3 className='title-resident header-h3'>Total Resident : <b className='value-resident'>{rickLocation.residents?.length}</b></h3>
                        </div>

                        <div className="container-input2">
                            <input placeholder='type a location id' type="text" value={searchId} onChange={e => setSearchId(e.target.value)} />
                            <button onClick={idSearch} className="btn-search">Search</button>
                        </div>
                    </div>
                </div>
                {/* Para Mobil */}
                <div className="container-header-img">
                    <img src='./src/assets/images/rick-and-morty-react-bootcamp.avif' />
                </div>
                <div className="container-input">
                    <input placeholder='type a location id' type="text" value={searchId} onChange={e => setSearchId(e.target.value)} />
                    <button onClick={idSearch} className="btn-search">Search</button>
                </div>
                <div className="info-basic">
                    <h2>{rickLocation.name}</h2>
                    <hr />
                    <h3 className='title-type header-h3'>Type : <b className='value-type'>{rickLocation.type}</b></h3>
                    <h3 className='title-dimension header-h3'>Dimension : <b className='value-dimension'>{rickLocation.dimension}</b></h3>
                    <h3 className='title-resident header-h3'>Total Resident : <b className='value-resident'>{rickLocation.residents?.length}</b></h3>
                    <hr></hr>
                </div>

            </div>

            <div className='section'>
                <ul className="container-item">
                    {
                        rickLocation.residents?.map(resident => (
                            <ResidentInfo key={resident} url={resident} />
                        ))}
                </ul>
            </div>

        </div>
    );
};

export default Location;
