import {React} from 'react';
import './_Portfolio.scss';
import {Container, Row, Col, Card, Button,Accordion, Fade, CardGroup, Badge} from 'react-bootstrap';

import PortfolioData from './PortfolioData';

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

            <Container className='container'>
                <Row className='py-5'>
                    {PortfolioData.map((data,id)=>{
                        return(
                            <Col key={data.id}>
                                <Card  className='my-3 port-cards' border="dark">
                                    <Card.Img variant="top" src={data.img}  className='card-img'/>
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


