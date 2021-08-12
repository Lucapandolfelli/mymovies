import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className='navbar-brand'>
                <Router>
                    <Link>MyMovies</Link>
                </Router>
            </div>
            <ul className='navbar'>
                <Router>
                    <li className='navbar-item'>
                        <Link to=''>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to=''>Movie</Link>
                    </li>
                </Router>
            </ul>           
        </nav>
    );
};
