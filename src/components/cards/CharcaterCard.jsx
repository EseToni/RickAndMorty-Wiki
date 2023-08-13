import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './CharacterCard.css';

const CharacterCard = ({name, species, status, id, type, image, location, gender}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    let statusColorClass = "";
    if (status === "Dead"){
        statusColorClass = "status-dead"
    }else if (status === "unknown"){
        statusColorClass = "status-unknown"
    }else if (status === "Alive"){
        statusColorClass = "status-alive"
    }
    return (
        <div className="card">
            <div className="img">
                <img src={image} alt={name + id + " NOT FOUND"} />
                <span className={`status ${statusColorClass}`}>{status}</span>
                <i className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} onClick={handleFavoriteClick}>
                    <FontAwesomeIcon icon={faHeart} />
                </i>
                <h2 className="name">{name}</h2>
            </div>
            <p className="info">Specie: {species}{type?`, ${type}` : ""} </p>
            <p className="info">Gender: {gender}</p>
            <p className="info">Last location: {location}</p>
        </div>
    );
}

export default CharacterCard;
