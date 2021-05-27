import React from 'react';
import './_Navi.scss';

import {Nav, Navbar, Row, Col, Container} from 'react-bootstrap';


const Navi = () => {
    return (
        <div className='navi-container'>
            <Row>
            <Navbar collapseOnSelect expand='sm' className='bg-transparent mt-4' fixed='top'>
                <Container fluid  >
                    <Col>
                        <Navbar.Brand className='brand'>
                        Austin<span>Tyler</span>
                        </Navbar.Brand>
                    </Col>
                        <Navbar.Toggle className='mb-3'aria-controls="responsive-navbar-nav" />
                
                    <Col xs sm md lg ='4' >
                    <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className='me-auto x'  >
                            <Nav.Link className="nav-links">Home</Nav.Link>
                            <Nav.Link className="nav-links">Portfolio</Nav.Link>
                            <Nav.Link  className="nav-links">About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Col>
                </Container>
            </Navbar>
            </Row>
            
        </div>
    )
}

export default Navi
