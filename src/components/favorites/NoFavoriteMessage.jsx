import React from 'react'
import { Button } from '@mui/material'
import "./noFavoriteMessage.css"
import { Link } from 'react-router-dom';

export default function NoFavoriteMessage() {
    const customStyles = {
        backgroundColor: 'rgb(82, 80, 80)',
        color: 'white',
    };
    return (
        <div className='containerNoFavorite'>
            <h1>You haven't added any characters to your favorites yet.</h1>
        </div>
    )
}
