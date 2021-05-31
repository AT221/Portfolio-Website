import yahtzee from '../../Images/Portfolio/Yahtzee.jpg';
import nasa from '../../Images/Portfolio/Nasa.jpg';
import odigo from '../../Images/Portfolio/Odigo.jpg';
import ecommerce from '../../Images/Portfolio/E-commerce.jpg';




const PortfolioData = [
    {
        id: 1,
        name: 'Yahtzee',
        img: yahtzee,
        description:'2-player Yahtzee game using JavaScript, HTML5, and CSS3.',
        url:`https://atyahtzee.netlify.app/`,
            
            techStack: {
                java: 'JavaScript', 
                html: 'HTML5', 
                css: 'CSS3',
                oop: 'OOP'
            },

    },
    {
        id: 2,
        name: 'NASA AOPOD',
        img: nasa,
        description:`Built a custom landing page that shows images of space taken by NASA on a specific date or between specific dates by using NASA’s Astronomy Picture of the Day API.`,
        // techStack: 'JavaScript, React.js, Axios, React Date Picker, React Lighbox, HTML5, CSS3, RESTful APIs.',
        url:`https://atnasaapod.netlify.app/`,
        techStack: {
            java: 'Ja', 
            html: 's', 
            css: 'd',
            oop: 'OOPs'
        },
    },
    {
        id: 3,
        name: 'Odigo',
        img: odigo,
        description:`Designed and implemented a Proof of Concept of a simple landing page for a travel-related website that helps users in discovering amazing places in Japan.`,
        // techStack: 'JavaScript, React.js, React Hooks, HTML5, CSS3, SASS, modern responsive techniques.',
        url:`https://atodigo.netlify.app/`,
        techStack: {
            java: 'JavaScript', 
            html: 'HTML5', 
            css: 'CSS3',
            oop: 'OOP'
        },
    },
    {
        id: 4,
        name: 'E-Comerce Platform (Under Development)',
        img: ecommerce,
        description:`Architected and implemented a complete custom e-commerce platform that includes product management, cart management, order management, and a checkout module.`,
        // techStack:'JavaScript, React.js, Redux, React Hooks, React Thunk, Axios, HTML5, CSS3, SASS, CSS Flexbox, RESTful APIs.',
        url:`https://atte-commerce.netlify.app/`,
        techStack: {
            java: 'JavaScript', 
            html: 'HTML5', 
            css: 'CSS3',
            oop: 'OOPs'
        },
    },
]



export default PortfolioData;
