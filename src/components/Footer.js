import { Col, NavLink, Row } from "react-bootstrap"

const Footer = ()=>{
    return (
        <>
            <Col className="col-12 ">
                <h5>Quick Links</h5>
                <Row>
                <Col sm="3">
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/authors">Authors</NavLink>
                </Col>
                <Col sm="6">
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/login">Login</NavLink>
                </Col>
                </Row>
            </Col>
            <Col className="text-center" >
                &copy;Abba Bawa 2021
            </Col>
        </>
    )
}

export default Footer