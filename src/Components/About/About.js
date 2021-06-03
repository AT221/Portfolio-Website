import React from 'react';
import './_About.scss';
import {Row, Col, Container, Image, Card, Button} from 'react-bootstrap';
import Profile from '../../Images/About/Profile-05.jpeg';


const About = () => {
    return (
        <div className='about-container' id='about'>
            <Container className='container-about'>
                <Row >
                    <Col sm={12} md={6} lg={5} xl={4}>
                        <div className='img-container' >
                        <Image  src={Profile} className='about-img' roundedCircle />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={7} xl={8}>
                        <div className='card-container'>
                            <Card className='text-center'>
                                <Card.Header>About Me</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        My name is Austin Tyler and I have been a front-end web developer since 2020. 
                                        I am based in Manhattan, New York and I eventually found myself in
                                        the tech side of post production as an Assistant Editor. This was where I developed 
                                        a passion for coding and since then have been becoming proficient in front-end frameworks and languages.
                                <br/>
                                    </Card.Text>
                                    <Card.Text>
                                        I am highly-motivated,  detail oriented, self-driven, hard-working, 
                                        and am constantly seeking to improve my skills wherever and whenever possible. 
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-muted'>
                                    <Button variant='danger'>Download Resume</Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
