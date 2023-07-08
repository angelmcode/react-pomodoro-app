import '../stylesheets/timer_controls.css'

function TimerControls({ name_button, idtimerc, handleClick }) {
  // const [count, setCount] = useState(0)

  return (
    <button id={idtimerc} className='buttons_t_controls' onClick={handleClick}>{name_button}</button>
  )
}

export default TimerControls