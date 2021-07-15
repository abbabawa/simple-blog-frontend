import {NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'

import User from '../User'

function Header(props){
    const [userDetails, setUserDetails] = useState({id: sessionStorage.getItem('id'), name: sessionStorage.getItem('name')})
    // useEffect(()=>{
    //     setUserDetails({id: User.getId(), name: User.getName()})
    // }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2 className="navbar-brand" href="#">Simple Blog FrontEnd</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className={`navbar-nav  ms-auto ${userDetails.id ? 'd-none': ''}`}>
                        <li className="nav-item">
                            <NavLink class="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink class="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>
                    <ul className={`navbar-nav  ms-auto  ${userDetails.id ? '' : 'd-none'}`}>
                        <li className="nav-item">{userDetails.name}</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header