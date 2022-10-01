import React from 'react';
import {NavLink} from "react-router-dom";
import reddit from '../../assets/logo.png';
import './Header.css';


function Header() {
    return (
        <div className="header">
                <nav>
                    <ul>
                        <li><NavLink exact to="/">Hottestpost</NavLink></li>
                        <li><NavLink to="/subreddit/:id">Reddit</NavLink></li>
                        <li><NavLink to="/memes">Memes</NavLink></li>
                    </ul>
                </nav>
                <img src={reddit} alt="reddit-logo"/>
        </div>

    );
}

export default Header;