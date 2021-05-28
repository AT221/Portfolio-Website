import React from 'react';
import './_TopBody.scss';
import Skills from '../Skills/Skills';

const TopBody = (props) => {
    
    return (
        <div className='body'>

        <div className='img'>
            <div className='txt-container'>
                <p className='txt'> 
                Austin Tyler 
                <br/>
                <span>Front-End Web Developer</span>
                </p>
            </div>
        </div>
        
        <div className='skills'>
           <Skills scroll ={props.scroll}/>
        </div>

        <div className='img'></div>

        </div>
    )
}

export default TopBody
