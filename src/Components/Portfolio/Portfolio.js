import {React} from 'react';
import './_Portfolio.scss';
import PortfolioData from './PortfolioData';
import {Container, Row, Col, Card, Button,Accordion, Fade, CardGroup, Badge} from 'react-bootstrap';
import {FaGithubSquare} from "react-icons/fa";
import {FiLogOut} from 'react-icons/fi';

import {Link} from 'react-router-dom';

const Portfolio = (props) => {
    
    const handleFade= (key) =>{
        if(!props.fade.includes(key)){          
            props.setFade([...props.fade, key]);
        }else{
            props.setFade(currentNum => currentNum.filter((i) => i !== key));
        }
    };

    return (
        <div>
    
            <Container className='container' id ='portfolio'>
                <Row className='py-5'>
                    {PortfolioData.map((data,id)=>{
                        return(
                            <Col key={data.id}>
                                <Card  className='my-3 port-cards' border="dark">
                                    <Card.Img variant="top" src={data.img}  className='card-img'/>
                
                                    <Row className='btn-row'>
                                        <Col  >
                                        <Link to={{ pathname: data.github}} target="_blank" className='link'>
                                        <FaGithubSquare size='2.8em' className='port-btn'></FaGithubSquare>
                                        </Link>
                                        </Col>

                                        <Col xs sm md lg xl={6} >
                                        <Link to={{ pathname: data.url }} target="_blank" className='link'>
                                            <FiLogOut size='2.8em' className='port-btn'></FiLogOut>
                                        </Link>
                                        </Col>
                                    </Row>

                                <Card.Body >
                                <Accordion >
                                    <Card.Header>
                                        <Accordion.Toggle 
                                        onClick={()=>{handleFade(data.id)}}
                                            aria-controls={data.id}
                                            aria-expanded={props.fade}
                                            as={Button} variant="link" eventKey="0">
                                        TechStack:
                                        </Accordion.Toggle>
                                    </Card.Header>
                                <Accordion.Collapse eventKey="0" >
                                    <Fade in={props.fade.includes(data.id) ? props.fade: null}>
                                <CardGroup className='mt-3' g>
                    {data.techStack.map((tech)=>{
                        return(
                            <Col xs sm md lg xl={6} >
                                <Card className='m-1' >
                                <Badge  className='tech-stacks'>
                                    {tech}
                                </Badge>
                                </Card>
                            </Col>
                        )
                    })}
                                </CardGroup>
                                    </Fade>
                                </Accordion.Collapse>
                                </Accordion>
                                </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
