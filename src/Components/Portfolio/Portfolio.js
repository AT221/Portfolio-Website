import React from 'react';
import './_Portfolio.scss';
import {Container, Row, Col, Card, Button,Accordion, ListGroup, ListGroupItem, Fade} from 'react-bootstrap';

import PortfolioData from './PortfolioData';

const Portfolio = (props) => {

    let techArr = Object.values(PortfolioData);



    
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
                {/* regular card with description image then on hover you will see the option for git or live */}
                <Row className='py-5'>
                {PortfolioData.map((data,id)=>{
                  
                    return(
                    <Col key={id}>
                        <Card style={{ width: '18rem' }} className='my-3 port-cards' >
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                {/* <Card.Title className='port-title'>{data.name}</Card.Title> */}

                                <Accordion>
                                    <Card.Header>
                                    <Accordion.Toggle 
                                    onClick={()=>{handleFade(id)}}
                                        aria-controls={id}
                                        aria-expanded={props.fade}
                                        as={Button} variant="link" eventKey="0">
                                    TechStack:
                                    </Accordion.Toggle>
                                    </Card.Header>



                                    <Accordion.Collapse eventKey="0">
                                    <Fade in={props.fade.includes(id) ? props.fade: null}>
                                        <Card.Body className='port-descrip' id={id}>
                                        
                                        {/* {data.description} */}
                                        
                                   
                            <Card.Text>
                            
                                <ListGroup className='techStack-container py-4'>

                                <ListGroup horizontal className="my-2" key={id}>

                  
                        
                                {techArr.map((data, id)=>{
                              
                                    return(
                                        <div>
                                <ListGroup horizontal className="my-2" key={data.id}>
                                    <ListGroup.Item>{JSON.stringify()}</ListGroup.Item>

                                </ListGroup>
                                        </div>
                                    )
                                    
                                })}
                                </ListGroup>
                                
                                    {/* <ListGroupItem className='techStack'>
                                    TechStack:
                                    </ListGroupItem> */}
                                    
                                </ListGroup>
                            </Card.Text>
                                        </Card.Body>
                                    </Fade>

                                    </Accordion.Collapse>




                                </Accordion>
                            {/* <Card.Footer>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Footer> */}

                            </Card.Body>
                        </Card>
                        
                    </Col>
                    )
                    })}
                    
                </Row>
            </Container>
                                  {/* {handleDynamicData()} */}
        </div>
    )
}

export default Portfolio


