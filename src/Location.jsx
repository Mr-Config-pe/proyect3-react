import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';


const Location = ({ headercell, mortySearch, portalSearch }) => {

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
        setCurrentPage(1);
        if (searchId === "0") {
            alert("No es un id valido | Escoge uno del 1 al 126")
        } else if (searchId <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
                .then(res => setRickLocation(res.data));
        } else {
            alert("No es un id valido | Escoge uno del 1 al 126")
        }

    }

    //URL de Video Header

    const urlHeader = "https://drive.google.com/uc?export=download&id=116TnmgSqLjv5ocLTgurcDp4scmRG2Uxm";
    const urlImgHeader = "https://www.xtrafondos.com/wallpapers/familia-sanchez-rick-y-morty-9231.jpg";


    // console.log(rickLocation); //Imprimir API para ver su contenido

    // Variables para Calcular 9 residentes por pagina

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = rickLocation.residents?.slice(firstPostIndex, lastPostIndex);


    return (

        <div>
            <div className="header">
                <div className="video-header">
                    <video src={urlHeader} autoPlay muted loop poster={urlImgHeader} className='video-intro'></video>
                    <div className="container-intro-video">

                        {/* Para Desktop */}
                        <div className="info-basic2">
                            <h2>{rickLocation.name}</h2>
                            <h3 className='title-type header-h3'>Type : <b className='value-type'>{rickLocation.type}</b></h3>
                            <h3 className='title-dimension header-h3'>Dimension : <b className='value-dimension'>{rickLocation.dimension}</b></h3>
                            <h3 className='title-resident header-h3'>Total Resident : <b className='value-resident'>{rickLocation.residents?.length}</b></h3>
                        </div>

                        <div className="container-input2">
                            <input placeholder='type a portal id' type="text" value={searchId} onChange={e => setSearchId(e.target.value)} />
                            <div className="container-btn-search">
                                {/* <img src={portalSearch} className="portal-search"/> */}
                                <b onClick={idSearch} className="btn-search" ><a>Search</a></b>
                                <img className="mortysearch" src={mortySearch} />
                                <i className="fa-solid fa-hurricane fa-spin" ></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Para Mobil */}
                <div className="container-header-img">
                    <img src={headercell} />
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
                        currentPosts?.map(resident => (
                            <ResidentInfo
                                key={resident}
                                url={resident} />
                        ))}
                </ul>
            </div>

            <Pagination
                totalPosts={rickLocation.residents?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />

        </div>
    );
};

export default Location;
