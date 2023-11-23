import React, { useState, useEffect } from 'react';
import regionesJSON from '/src/JSON/regiones.json';
import styles from '/css/fetchRegiones.module.css'

function fetchRegiones() {
    const [regiones, setRegiones] = useState([]);
    useEffect(() => {
        setRegiones(regionesJSON);
    }, []);
    return (
        <>
            <select id={styles.sel_regiones} name="sel_region" required="">
                {regiones.map((data,i) => (
                    <option value={i} key={i}>
                        {data.region}
                    </option>
                ))}
            </select>
        </>
    )
}
/*
#sel_region{
                    background-color: red;
                    width: 1px;
                }
             */

export default fetchRegiones;