import React, {useState} from 'react';
import Navi from '../Navi/Navi';
import TopBody from '../TopBody/TopBody';

import './_App.scss';



const App = () => {
  const [scroll, setScroll] = useState(false);
  const [bounce, setBounce] = useState(false);

  return (
    <div>
        <Navi scroll={scroll} setScroll={setScroll} setBounce={setBounce}/>
        <TopBody bounce={bounce} />
    </div>
  )
}

export default App
