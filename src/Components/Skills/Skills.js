import React from 'react';
import './_Skills.scss';
import {Row, Col, Container, Image} from 'react-bootstrap';
import SkillsImages from '../Skills/SkillsImages';

const Skills = () => {
    return (
        <div>
            <Container className='skill-container'>
                <Row className='py-5'>
                    {SkillsImages.map((image, id)=>{
                        return(
                    <Col className='img-container '>
                        <Image className='skill-img' src={image.img} roundedCircle />
                    </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Skills;
