import {NavLink} from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

function SideBar(props){console.log(props.categories)
    let cats = []
    return (
            <Nav variant="pills" activeKey="1" className="mt-5 ms-4 flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="1" href="/">
                        Articles
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        Authors
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Categories" id="nav-dropdown">
                    {
                        props.categories.map(category=>{
                            return <NavDropdown.Item>{category.name}</NavDropdown.Item>
                        })
                    }
                    
                    {/* <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
            </Nav>
    )
}

export default SideBar