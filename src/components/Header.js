import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {BoxArrowRight} from 'react-bootstrap-icons'


import User from '../User'

function Header(props){
    const history = useHistory()
    const [userDetails, setUserDetails] = useState({id: sessionStorage.getItem('id'), name: sessionStorage.getItem('name')})
    // useEffect(()=>{
    //     setUserDetails({id: User.getId(), name: User.getName()})
    // }, [])

    const logout = (e)=>{
        // User.setId(null)
        // User.setName(null)
        // history.push('/articles')
    }

    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand href="/articles">Simple Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    { !User.getId() ? <Nav.Link href="/register">Register</Nav.Link> : '' }
                    { !User.getId() ? <Nav.Link href="/login">Login</Nav.Link> : ''}
                    { User.getId() ? <Nav.Link href={"/author/"+User.getId()}>{User.getName()}</Nav.Link> : ''}
                    { User.getId() ? <Nav.Link onClick={logout}>Logout <BoxArrowRight /></Nav.Link> : ''}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header