import {NavLink} from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { useParams } from 'react-router'

const links = [
    {
      id: 1,
      path: "/",
      text: "Articles",
    },
    {
      id: 2,
      path: "/authors",
      text: "Authors",
    },
  ]

  let i = 3

function SideBar(props){console.log(props.categories)
    let cats = []
    let category = useParams()
    if(props.categories){
        cats = props.categories
    }
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
                        cats.map(category=>{
                            return <NavDropdown.Item>
                                        <NavLink eventKey={i = (i + 1)} to={"/articles/"+category._id}>{category.name}</NavLink>
                                    </NavDropdown.Item>
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