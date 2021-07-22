import { useParams } from 'react-router'

import User from '../User'
import { useState } from 'react'

import { Button, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import { List } from "react-bootstrap-icons";



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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} fixed="top" className="d-md-none">
                Menu
                <List />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/">Articles</Nav.Link>
                        <Nav.Link eventKey="link-1" href="/authors">Authors</Nav.Link>
                        <NavDropdown title="Categories" id="nav-dropdown">
                            { 
                                cats.map(category=>{
                                    return <NavDropdown.Item eventKey="4.1" href={"/articles/"+category._id}>{category.name}</NavDropdown.Item>
                                })
                            }
                        </NavDropdown>
                        <Nav.Link eventKey="link-2" className={!userDetails.id ? 'd-none': ''} href={`/author/${User.getId()}`}>My Articles</Nav.Link>
                        <Nav.Link eventKey="link-2" className={!userDetails.id ? 'd-none': ''} href="/upload_article">Upload Article</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar