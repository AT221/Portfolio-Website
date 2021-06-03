import {React, useEffect} from 'react';
import './_Navi.scss';
import {Link} from 'react-scroll';

import {Nav, Navbar, Row, Col, Container} from 'react-bootstrap';

const Navi = (props) => {
    

useEffect(()=>{
    const handleScroll = () =>{
        window.scrollY > 667 ? props.setScroll(true) : props.setScroll(false);
        window.scrollY > 200 ? props.setBounce(true) : props.setBounce(false);
    }
    window.addEventListener('scroll', handleScroll);
})
    
    return (
        <div className='navi-container'>
            <Row>
            <Navbar collapseOnSelect expand='sm' className=' p-2' fixed='top'  id={props.scroll ? 'nav' : undefined}>
                <Container fluid>
                    <Col>
                        <Navbar.Brand className='brand'>
                        Austin<span>Tyler</span>
                        </Navbar.Brand>
                    </Col>
                        <Navbar.Toggle className='mb-3 toggler' aria-controls='responsive-navbar-nav' />
                
                    <Col xs sm md lg ='6' >
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto x'  >
                        <Link
                            to='home'
                            smooth ={true}
                            duration={1400}
                            >
                            <Nav.Link className='nav-links'>Home</Nav.Link>
                        </Link>
                        <Link
                            to='skills'
                            smooth ={true}
                            duration={1400}
                            >
                            <Nav.Link className='nav-links'>Skills</Nav.Link>
                        </Link>
                        <Link
                            to='portfolio'
                            smooth ={true}
                            duration={1400}
                            >
                            <Nav.Link className='nav-links'>Portfolio</Nav.Link>
                        </Link>
                        <Link
                            to='about'
                            smooth ={true}
                            duration={1400}
                            >
                            <Nav.Link className='nav-links'>About</Nav.Link>
                        </Link>
                        <Link
                            to='contact'
                            smooth ={true}
                            duration={1400}
                            >
                            <Nav.Link className='nav-links'>Contact</Nav.Link>
                        </Link>
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
