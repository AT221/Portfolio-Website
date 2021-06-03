import React from 'react';
import './_Contact.scss';
import {Row, Col, Container, Image, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import github from '../../Images/Skills/GitHub.png';
import gmail from '../../Images/Contact/Gmail.png';
import linkedin from '../../Images/Contact/linkedin.png';

const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <Container className='pt-5 pb-5'>
                <Row>
                    <Col>
                        <h3 className='contact-title pb-4'>Contact Me</h3>
                    </Col>
                </Row>

                <Row>
                <Col>
                <Link to={{pathname: 'mailto: AustinTyler221@gmail.com'}} target='_blank' className='link'>
                

                    <h4 className='email pb-4'>AustinTyler221@gmail.com</h4>
                </Link>
                </Col>
                </Row>

                <Row lg={6} className='logo-row py-4' >
                    <Col>
                <Link to={{pathname: 'mailto: AustinTyler221@gmail.com'}} target='_blank' className='link'>
                        <Image src={gmail} className='contact-logos' roundedCircle/>
                </Link>
                    </Col>
                    <Col>
                <Link to={{pathname: 'https://github.com/AT221'}} target='_blank' className='link'>
                    <Image src={github} className='contact-logos' roundedCircle/>
                </Link>
                    </Col>
                    <Col>
                <Link to={{pathname: 'https://www.linkedin.com/in/austin-tyler-75401b123/'}} target='_blank' className='link'>
                        <Image src={linkedin} className='contact-logos' roundedCircle/>
                </Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <hr/>
                        <p> Developed by Austin Tyler © 2021 </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contact
