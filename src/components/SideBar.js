import {NavLink} from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { useParams } from 'react-router'

import User from '../User'
import { useState, useEffect } from 'react'

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

function SideBar(props){
    const [userDetails, setUserDetails] = useState({id: User.getId(), name: User.getName()})
    // useEffect(()=>{
    //     setUserDetails({id: User.getId(), name: User.getName()})
    // }, [userDetails])
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
                                        <NavLink key={i = (i + 1)} to={"/articles/"+category._id}>{category.name}</NavLink>
                                    </NavDropdown.Item>
                        })
                    }
                    
                    {/* <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                
                    
                            <Nav.Item className={!userDetails.id ? 'd-none': ''}>
                                <Nav.Link eventKey="2" title="Item" href="/upload_article">
                                    My Articles
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={!userDetails.id ? 'd-none': ''}>
                                <Nav.Link eventKey="2" title="Item" href="/upload_article">
                                    Upload Article
                                </Nav.Link>
                            </Nav.Item>
                        
                
            </Nav>
    )
}

export default SideBar