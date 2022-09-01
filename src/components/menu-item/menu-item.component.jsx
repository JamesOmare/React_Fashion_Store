import React from "react";
import './menu-item.styles.scss'
import { Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate();

    return (
  
        <div
        className= {`${size} menu-item`}
        onClick = {() => navigate(`${linkUrl}`)}
        >
            <div className= {`${size} menu-item`}>
            <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
                }} />  
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
        
    )
} 

export default MenuItem;