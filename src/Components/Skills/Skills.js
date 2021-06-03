import React from 'react';
import './_Skills.scss';
import {Row, Col, Container, Image, OverlayTrigger,Tooltip} from 'react-bootstrap';
import SkillsImages from './SkillsData';

const Skills = (props) => {
    return (
        <div >
            <Container className={props.bounce ? 'skill-container' : 'stretch'} >
                <Row className='py-5'>
                    {SkillsImages.map((image, id)=>{
                        return(
                            <Col className='img-container py-3' key={id}>
                                <OverlayTrigger
                                    placement='bottom'
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={
                                        <Tooltip id='button-tooltip' {...props}>
                                                {image.description}
                                                </Tooltip>
                                            }>
                                <Image id={props.bounce ? 'skill-img' : 'img-default'}  src={image.img} roundedCircle />
                                </OverlayTrigger> 
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Skills;
