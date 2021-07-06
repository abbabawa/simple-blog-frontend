

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2 className="navbar-brand" href="#">Simple Blog FrontEnd</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header