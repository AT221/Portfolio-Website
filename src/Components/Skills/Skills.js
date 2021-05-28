import React from 'react';
import './_Skills.scss';
import {Row, Col, Container, Image} from 'react-bootstrap';
import SkillsImages from '../Skills/SkillsImages';

const Skills = (props) => {
    return (
        <div>
            <Container className={props.bounce ? 'skill-container' : 'stretch'} >
                <Row className='py-5'>
                    {SkillsImages.map((image, id)=>{
                        return(
                    <Col className='img-container py-2'>
                        <Image className={props.bounce ? 'skill-img' : 'undefined'} src={image.img} roundedCircle />
                    </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Skills;
