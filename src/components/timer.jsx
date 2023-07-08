import '../stylesheets/timer.css'

function Timer({sessionOrBreak, timeFormatter }) {
  // const [count, setCount] = useState(0)

  return (
    <div className='container_timer'>
      <h1 id="timer-label" className='h1_timer'>{sessionOrBreak}</h1>
      <div id="time-left" className='timer_time'>{timeFormatter}</div>
    </div>
  )
}

export default Timer