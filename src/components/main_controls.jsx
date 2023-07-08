import '../stylesheets/main_controls.css'

function MainControls({ titleMControls, idLabel, idbuttond, idbuttoni, idminutes, minutes, manageClickDown, manageClickUp}) {
  // const [count, setCount] = useState(0)

  return (
    <div className='container-m_controls'>
      <h1 className='h1_m_controls' id={idLabel}>{titleMControls}</h1>
      <div className='container_buttons_m_controls'>
        <button onClick={manageClickDown} className='buttons_m_controls' id={idbuttond}>Down</button>
        <div className='minutes_m_controls' id={idminutes}>{minutes}</div>
        <button onClick={manageClickUp} className='buttons_m_controls' id={idbuttoni}>Up</button>
      </div>
    </div>
  )
}

export default MainControls