import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    return (
        
        <nav id="nav-bar">
            <ul> {/*<--Wrapped the links in an unordered list for display purposes */}
                <li>
                    <Link to="/">Home</Link> {/*<--The syntax within the "to" parameter, 
                                            refers to the HTTP GET request for the applicable page being navigated to. */}
                </li>

                <li>
                    <Link to="/Blogs">Blogs</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;