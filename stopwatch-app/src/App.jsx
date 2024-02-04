import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Panel from './components/Panel/Panel'
import Button from './components/Button/Button'
function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [loop, setLoop] = useState();
  const [status, setStatus] = useState(0);
  /*  Status
      0 = not started
      1 = started
      2 = stopped
  */
  
  const start = ()=>{
    update();
    
    setLoop(setInterval(update,10));
  }
  
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  
  const update = ()=>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60 ){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  const stop = ()=>{
    clearInterval(loop);
  }

  const reset = ()=>{
    clearInterval(loop);
    setTime({ms:0, s:0, m:0, h:0});
  }

  return (
    <>
      <Layout>
        <Panel time={time}/>
        <div class="flex mt-auto mx-auto p-4  w-full text-center text-white bg-black justify-around md:w-[70%] lg:w-[50%]">
                <Button name="Start" func={start}/>
                <Button name="Stop" func={stop}/>
                <Button name="Reset" func={reset}/>
          </div>
      </Layout>
    </>
  )
}

export default App
