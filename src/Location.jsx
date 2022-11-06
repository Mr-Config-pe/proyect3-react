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
        <div className='header'>
            <h3>Location : {rickLocation.name}</h3>
            <h3>Type : {rickLocation.type}</h3>
            <h3>Dimension : {rickLocation.dimension}</h3>
            <h3>Total Resident : {rickLocation.residents?.length}</h3>

            <input placeholder='type a location id' type="text" value={searchId} onChange={e => setSearchId(e.target.value)} />
            <button onClick={idSearch}>Search</button>

            <div >
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
