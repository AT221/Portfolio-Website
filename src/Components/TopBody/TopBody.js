import React from 'react';
import './_TopBody.scss';
import Skills from '../Skills/Skills';

const TopBody = (props) => {

    return (
        <div className='body'>

            <div className='upperImg'>
                <div className='txt-container'>
                    <p className='txt'> 
                    Austin Tyler 
                    <br/>
                    <span>Front-End Web Developer</span>
                    </p>
                </div>
            </div>
            
            <div className='skills'>
            <Skills bounce={props.bounce}/>
            </div>

            <div className='lowerImg'></div>
        </div>
    )
}

export default TopBody
