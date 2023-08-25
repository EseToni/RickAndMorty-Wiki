import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./cardDetail.css"

export default function CardDetail() {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, location, origin, gender, image, status, species, type } = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);
    let statusColorClass = "";
    
    if (status === "Dead") {
        statusColorClass = "cardDetailStatus-Dead"
    } else if (status === "unknown") {
        statusColorClass = "cardDetailStatus-Unknown"
    } else if (status === "Alive") {
        statusColorClass = "cardDetailStatus-Alive"
    }


    return (
        <div className="cardDetailContainer">
            <div className='cardDetailImgContainer'>
                <img src={image} className='cardDetailImage' />
                <span className={`cardDetailStatus ${statusColorClass}`}>{status}</span>
            </div>
            <div className='cardDetailBody'>
                <h1 className='cardDetailName'>{name}</h1>
                <h2 className='cardDetailH2'><strong className=''>Gender:</strong> {gender}</h2>
                <h2 className='cardDetailH2'><strong>Specie:</strong> {species}{type ? `, ${type}` : ""}</h2>
                <h2 className='cardDetailH2'><strong>Location:</strong> {location?.name}</h2>
                <h2 className='cardDetailH2'><strong>Origin:</strong> {origin?.name}</h2>
            </div>
        </div>
    )
}
