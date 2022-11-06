import axios from "axios";
import { useEffect, useState } from "react";

const Items = ({url}) => {

    const [randmItem, setRandMItem] = useState({});

    useEffect(() => {

        axios.get(url)
        .then(res => setRandMItem (res.data));

    }, [])

    console.log(randmItem)
    
    return (
        <div>
            <li>
                {url}
            </li>
        </div>
    );
};

export default Items;