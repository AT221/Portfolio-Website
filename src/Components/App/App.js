import React, {useState} from 'react';
import Navi from '../Navi/Navi';
import TopBody from '../TopBody/TopBody';

import './_App.scss';



const App = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <div>
        <Navi scroll={scroll} setScroll={setScroll}/>
        <TopBody scroll={scroll}/>
    </div>
  )
}

export default App
