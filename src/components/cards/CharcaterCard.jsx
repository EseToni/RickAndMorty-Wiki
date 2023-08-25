import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import './CharacterCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../../redux/actions';
import { Link } from 'react-router-dom';

const CharacterCard = ({ name, species, status, id, type, image, location, gender, favorite }) => {
    const [isFavorite, setIsFavorite] = useState(favorite);
    const dispatch = useDispatch()
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        isFavorite ? dispatch(setFavorite(id, "QUIT"))
            : dispatch(setFavorite(id, "PUT"))
    };
    const favoriteChars = useSelector((state) => state.reducer.favoriteChars)

    let statusColorClass = "";
    if (status === "Dead") {
        statusColorClass = "status-dead"
    } else if (status === "unknown") {
        statusColorClass = "status-unknown"
    } else if (status === "Alive") {
        statusColorClass = "status-alive"
    }
    useEffect(() => {
        favoriteChars.includes(id) ? setIsFavorite(true) : setIsFavorite(false)
    }, [])

    return (
        <div className="card">
            <div className="img">
                <Link to={`/characters/${id}`}>
                    <img src={image} alt={name + id + " NOT FOUND"} />
                    <span className={`status ${statusColorClass}`}>{status}</span>
                </Link>
                <span className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} onClick={handleFavoriteClick}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <Link to={`/characters/${id}`}>
                    <h2 className="name">{name}</h2>
                </Link>
            </div>
            <Link to={`/characters/${id}`}>
                <p className="info"><strong>Specie:</strong> <i>{species}{type ? `, ${type}` : ""}</i> </p>
                <p className="info"><strong>Gender:</strong> <i>{gender}</i></p>
                <p className="info"><strong>Last location:</strong> <i>{location}</i></p>
            </Link>
        </div>
    );
}

export default CharacterCard;
