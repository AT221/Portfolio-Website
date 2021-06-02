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
        github:'https://github.com/AT221/Yahtzee',
            
            techStack: [
                'JavaScript', 
                'HTML5', 
                'CSS3',
                'OOP'
            ],
            

    },
    {
        id: 2,
        name: 'NASA AOPOD',
        img: nasa,
        description:`Built a custom landing page that shows images of space taken by NASA on a specific date or between specific dates by using NASA’s Astronomy Picture of the Day API.`,
        url:`https://atnasaapod.netlify.app/`,
        github:'https://github.com/AT221/NASA-Astronomy--APOD',

        techStack:[ 
            'JavaScript', 
            'React.js', 
             'Axios',
             'HTML5',
             'CSS3',
             'RESTful API'
            ],
        },
        {
            id: 3,
            name: 'Odigo',
            img: odigo,
            description:`Designed and implemented a Proof of Concept of a simple landing page for a travel-related website that helps users in discovering amazing places in Japan.`,
            url:`https://atodigo.netlify.app/`,
            github:'https://github.com/AT221/Odigo-Landing-Page',

            techStack: [
                'JavaScript', 
                'React.js', 
                'React Hooks',
                'HTML5',
                'CSS3',
                'SASS',
            ],

        },
        {
            id: 4,
            name: 'E-Comerce Platform (Under Development)',
            img: ecommerce,
            description:`Architected and implemented a complete custom e-commerce platform that includes product management, cart management, order management, and a checkout module.`,
            url:`https://atte-commerce.netlify.app/`,
            github:'https://github.com/AT221/ecommerce',
            
            techStack: [
                'JavaScript', 
                'React.js', 
                'React Hooks',
                'Redux',
                'Redux Thunk',
                'Axios',
                'HTML5',
                'CSS3',
                'SASS',
                'CSS Flexbox',
                'RESTful API'
            ],
        },
    ]
    
    
    
    export default PortfolioData;
    