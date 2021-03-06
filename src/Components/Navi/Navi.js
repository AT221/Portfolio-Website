import {React, useEffect} from 'react';
import './_Navi.scss';
import {Link} from 'react-scroll';

import {Nav, Navbar, Row, Col, Container} from 'react-bootstrap';

const Navi = (props) => {

useEffect(()=>{
    const handleScroll = () =>{
        window.scrollY > 100 ? props.setScroll(`$true`) : props.setScroll(false);
        window.scrollY > 200 ? props.setBounce(`$true`) : props.setBounce(false);
    }
    window.addEventListener('scroll', handleScroll);
})
    
    return (
        <div className='navi-container'>
            <Row>
            <Navbar collapseOnSelect expand='sm' className=' p-2' fixed='top'  id={props.scroll ? 'nav' : undefined}>
                <Container fluid>
                    <Col>
                        <Nav.Link
                                as={Link} 
                                to='home'
                                smooth ={true}
                                duration={500}
                                className='nav-links'>
                        <Navbar.Brand className='brand'>
                            Austin<span>Tyler</span>
                        </Navbar.Brand>
                            </Nav.Link>
                    </Col>
                        <Navbar.Toggle className='mb-3 toggler' aria-controls='responsive-navbar-nav' />
                
                    <Col xs sm md lg ='6' >
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto x'>
                            <Nav.Link
                                as={Link} 
                                to='home'
                                smooth ={true}
                                duration={500}
                                className='nav-links'>Home
                            </Nav.Link>

                            <Nav.Link
                                as={Link}  
                                to='skills'
                                smooth ={true}
                                duration={500}
                                className='nav-links'>Skills
                            </Nav.Link>
                       
                            <Nav.Link
                                as={Link}  
                                to='portfolio'
                                smooth ={true}
                                duration={500}
                                offset={-70}
                                className='nav-links'>Portfolio
                            </Nav.Link>

                            <Nav.Link
                                as={Link}  
                                to='about'
                                smooth ={true}
                                duration={500}
                                offset={-180}
                                className='nav-links'>About
                            </Nav.Link>
         
                            <Nav.Link 
                                as={Link} 
                                to='contact'
                                smooth ={true}
                                duration={500}
                                className='nav-links'>Contact
                            </Nav.Link>

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
