import React, { useState, useEffect } from 'react';
import regionesJSON from '/src/JSON/regiones.json';

function fetchRegiones() {
    const [regiones, setRegiones] = useState([]);
    useEffect(() => {
        setRegiones(regionesJSON);
    }, []);
    return (
        <>
            <select id="sel_region" name="sel_region" required="">
                {regiones.map((data,i) => (
                    <option value={i} key={i}>
                        {data.region}
                    </option>
                ))}
            </select>
        </>
    )
}

export default fetchRegiones;