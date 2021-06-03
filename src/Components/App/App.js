import {React, useState} from 'react';
import Navi from '../Navi/Navi';
import TopBody from '../TopBody/TopBody';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import './_App.scss';


const App = () => {
  const [scroll, setScroll] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [fade, setFade] = useState([]);


  return (
    <div>
        <Navi scroll={scroll} setScroll={setScroll} setBounce={setBounce}/>
        <TopBody bounce={bounce} />
        <About/>
        <Portfolio fade={fade} setFade={setFade}/>
        <Contact />
    </div>
  )
}

export default App
