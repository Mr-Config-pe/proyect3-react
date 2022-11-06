import axios from "axios";
import { useEffect, useState } from "react";



const ResidentInfo = ({ url }) => {


    const [randmItem, setRandMItem] = useState({});
    // const [statusItem, setStatusItem] = useState("Hola");

    useEffect(() => {

        axios.get(url)
            .then(res => setRandMItem(res.data));


    }, [])


    const isAlive = <div className="isLive"><i className="fa-solid fa-heart fa-beat"><b></b></i> Alive</div>
    const isDead = <div className="isDead"><i className="fa-sharp fa-solid fa-skull-crossbones fa-fade"></i> Dead</div>
    const isUnknown = <div className="isUnknown"><i className="fa-solid fa-circle-question fa-flip"></i> Unknown</div>


    // console.log(statusItem);

    return (
        <div>
            {/* <li>
                <h3>{randmItem.name}</h3>
                <div className="container-img-resident">
                    <img src={randmItem.image} />
                </div>
                <h3>Estado : {randmItem.status}</h3>
                <h3>Cantidad Episodio : {randmItem.episode?.length}</h3>
                <h3>Origen : {randmItem.origin?.name}</h3>
                <h3>Especie : {randmItem.species}</h3>
            </li> */}
            <div className="container-card">
                <div className="residents-card">
                    <div className="profile-img">
                        <img src={randmItem.image} />
                        <h4 className="container-status">{randmItem.status === "Alive" && isAlive ||
                            randmItem.status === "Dead" && isDead ||
                            randmItem.status === "unknown" && isUnknown}</h4>
                    </div>
                    <h2>{randmItem.name}</h2>
                    <hr></hr>
                    <h4>Specie : {randmItem.species}</h4>
                    <h4>Origin : {randmItem.origin?.name}</h4>
                    <h4>Quantity Episode : {randmItem.episode?.length}</h4>
                </div>
            </div>
        </div >
    );
};

export default ResidentInfo;