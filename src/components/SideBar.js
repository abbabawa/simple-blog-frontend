import {Link} from 'react-router-dom'

function SideBar(){
    return (
        
            <ul class="nav flex-column mt-5 mx-auto">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/articles">Articles</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/categories">Categories</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/authors">Authors</Link>
                </li>
            </ul>
    )
}

export default SideBar