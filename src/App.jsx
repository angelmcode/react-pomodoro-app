import { useEffect, useState } from 'react'
import './App.css'
import MainControls from './components/main_controls'
import Timer from './components/timer'
import TimerControls from './components/timer_controls'

function App() {
  const [countBreak, setCountBreak] = useState(5)
  const [countSession, setCountSession] = useState(25)
  const [sessionOrBreak, setSessionOrBreak] = useState("Session")
  const [timeleft, setTimeleft] = useState(1500)
  const [play, setPlay] = useState(false)


  const manageClickUpBreak = () => {
    if (countBreak < 60)
    setCountBreak(countBreak + 1)
    if (sessionOrBreak === "Break" && countBreak < 60)
    setTimeleft((countBreak * 60) + 60)
  }

  const manageClickDownBreak = () => {
    if (countBreak > 1)
    setCountBreak(countBreak - 1)
    if (sessionOrBreak === "Break" && countBreak > 1)
    setTimeleft((countBreak * 60) - 60)
  }

  const manageClickUpSession = () => {
    if (countSession < 60)
    setCountSession(countSession + 1)
    if (sessionOrBreak === "Session" && countSession < 60)
    setTimeleft((countSession * 60) + 60)
  }

  const manageClickDownSession = () => {
    if (countSession > 1)
    setCountSession(countSession - 1)
    if (sessionOrBreak === "Session" && countSession > 1)
    setTimeleft((countSession * 60) - 60)
  }

  const timeFormatter = () => {
    const minutes = Math.floor(timeleft/60);
    const seconds = timeleft - minutes * 60;
    const formattedminutes = minutes < 10 ? "0" + minutes: minutes;
    const formattedseconds = seconds < 10 ? "0" + seconds: seconds;
    return formattedminutes + ":" + formattedseconds;
  }

  console.log(timeFormatter());

  const handleplay = () => {
    if (play) {
      clearTimeout(timeout)
      setPlay(false)
    } else {
      setPlay(true)
    }
  }

  const handlereset = () => {
    setPlay(false);
    setTimeleft(1500);
    clearTimeout(timeout);
    setCountBreak(5);
    setCountSession(25);
    setSessionOrBreak("Session");
    let audioBeep = document.getElementById("beep")
    audioBeep.pause();
    audioBeep.currentTime = 0;
  }

  const timeout = setTimeout(() => {
    if(timeleft && play) {
      setTimeleft(timeleft - 1)
    }
  }, 1000);

  useEffect(() => {
    if (timeleft === 0 && sessionOrBreak === "Session") {
      console.log("this is a zero")
      let audioBeep = document.getElementById("beep")
      audioBeep.play();
      setTimeout(() => {
        setSessionOrBreak("Break")
        setTimeleft(countBreak * 60)
      }, 2000);
    } else if (timeleft === 0 && sessionOrBreak === "Break") {
      console.log("this is a zero")
      let audioBeep = document.getElementById("beep")
      audioBeep.play();
      setTimeout(() => {
        setSessionOrBreak("Session")
        setTimeleft(countSession * 60)
      }, 2000);
    }
  }, [timeleft])

  return (
    <div className='main_container'>
      <h1 className='h1-app'>Pomodoro App</h1>
      <div className='container_app'>
        <div className='container_main_controls'>
          <MainControls manageClickUp={manageClickUpBreak} manageClickDown={manageClickDownBreak} minutes={countBreak} idLabel={"break-label"} idbuttond={"break-decrement"} idbuttoni={"break-increment"} idminutes={"break-length"} titleMControls={"Break Length"} />
          <MainControls  manageClickUp={manageClickUpSession} manageClickDown={manageClickDownSession} minutes={countSession} idLabel={"session-label"} idbuttond={"session-decrement"} idbuttoni={"session-increment"} idminutes={"session-length"} titleMControls={"Session Length"} />
        </div>
          <Timer timeFormatter={timeFormatter()} sessionOrBreak={sessionOrBreak} />
        <div className='container_timer_controls'>
          <TimerControls handleClick={handleplay} idtimerc={"start_stop"} name_button={"Play / Stop"} />
          <TimerControls handleClick={handlereset} idtimerc={"reset"} name_button={"Reset"} />
        </div>
        <audio id='beep' src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
    </div>
  )
}

export default App
