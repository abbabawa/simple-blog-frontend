import {NavLink} from 'react-router-dom'

function SideBar(){
    return (
        
            <ul class="nav flex-column mt-5 mx-auto">
                <li class="nav-item" key="1">
                    <NavLink class="nav-link active" aria-current="page" to="/" exact>Articles</NavLink>
                </li>
                <li class="nav-item" key="2">
                    < NavLink class="nav-link" to="/categories" >Categories</NavLink>
                </li>
                <li class="nav-item" key="3">
                    <NavLink class="nav-link" to="/authors" >Authors</NavLink>
                </li>
            </ul>
    )
}

export default SideBar