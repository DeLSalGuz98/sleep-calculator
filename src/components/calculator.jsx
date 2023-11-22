import { useEffect, useState } from 'react'
import { Modal } from './modal'
import { SelectInput } from './selectInput'

export function FormCalculator() {
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const meridianTime = ['a.m.','p.m.']
  const [time, setTime] = useState({
    'hour':'01',
    'minute':'00',
    'meridian':'a.m.'
  })
  const [hourToSleep, setHourToSleep] = useState([])
  const [message, setMessage] = useState('')
//30, 1:30, 3, 4:30, 6, 7:30  
  useEffect(()=>{
    setHours(getNumbers(12))
    setMinutes(getNumbers(60))
  },[])
  const getNumbers = (number)=>{
    const newArray = []
    for (let i = 0; i < number; i++) {
      let number = i<10?`0${i}`: i
      newArray.push(number) 
    }
    return newArray
  }
  const onChange = (e)=>{
    const {name, value} = e.target
    setTime({...time, [name]:value})
  }
  const bedTime = ()=>{
    const timeArray = calculateTime('res')
    setHourToSleep(timeArray)
    setMessage(`Si quieres despertar ${time.hour}:${time.minute} ${time.meridian}, se recomienda acostarse a dormir:`)
  }
  const wakeUpTime = ()=>{
    const timeArray = calculateTime('sum')
    setHourToSleep(timeArray)
    setMessage(`Si quieres domir ${time.hour}:${time.minute} ${time.meridian}, se recomienda despertarse:`)
  }
  const calculateTime = (operation)=>{
    const minArray = [30, 90, 180, 270, 360, 450]
    const [h,m] = [parseInt(time.hour), parseInt(time.minute)]
    let meridian = meridianTime.findIndex(m=>m==time.meridian)
    let changeMeridian = false
    const bedTimeArray = []
    for (let i = 0; i < minArray.length; i++) {
      let totalMinute = (h*60) + m
      operation == 'sum'?totalMinute = totalMinute + minArray[i] + 15:totalMinute = totalMinute - minArray[i]-15
      if(totalMinute <= 0){
        totalMinute = (12*60) - (totalMinute * -1)
        if(meridian == 0 && changeMeridian == false){
          meridian = 1
        }else if(meridian == 1  && changeMeridian == false){
          meridian = 0
        }
        changeMeridian = true
      }
      if(totalMinute >= 720){
        if(meridian == 0 && changeMeridian == false){
          meridian = 1
        }else if(meridian == 1  && changeMeridian == false){
          meridian = 0
        }
        changeMeridian = true
      }
      let newhour = Math.trunc(totalMinute / 60)
      let newMinute = totalMinute - (newhour * 60)
      newhour < 10 ? newhour = `0${newhour}`: newhour >= 13? newhour = newhour - 12: newhour
      newMinute < 0? newMinute = newMinute*-1: newMinute
      newMinute < 10? newMinute = `0${newMinute}`: newMinute
      bedTimeArray.push(`${parseInt(newhour) == 0 ? '01': newhour}:${newMinute} ${meridianTime[meridian]}`)
    } 
    return bedTimeArray 
  }
  return(
    <div className=" col-12 col-lg-8 card border-light px-3 pb-3">
      <div className="card-body">
        <p className='fs-1'>Elije la Hora</p>
        <form>
          <div className='row'>
            <SelectInput title="Hora" name="hour" onChange={onChange} value={time.hour}>
              { 
                hours.map((hour)=>{
                  let text = parseInt(hour)+1 < 10? `0${parseInt(hour)+1}`:parseInt(hour)+1
                  return (<option key={hour} value={parseInt(hour)+1}>{text}</option>)
                })  
              }
            </SelectInput>
            <SelectInput title="Minuto" name="minute" onChange={onChange} value={time.minute}>
              {
                minutes.map((minute)=>{
                  return <option key={minute} value={minute}>{minute}</option>
                })  
              }
            </SelectInput>
            <SelectInput title="Meridiano" name="meridian" onChange={onChange} value={time.meridian}>
              <option value={'a.m.'}>a.m.</option>
              <option value={'p.m.'}>p.m.</option>
            </SelectInput>
          </div>
          <div className="d-grid gap-3 mt-4 ">
            <button className="btn btn-lg btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={bedTime}><i className="bi bi-cloud-moon fs-3"></i> Calcular el tiempo para dormir</button>
            <button className="btn btn-lg btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={wakeUpTime}><i className="bi bi-cloud-sun fs-3"></i> Calcular el tiempo para despertar </button>
          </div>
        </form>
        <Modal>
          <div>
            <p className='text-light'>{message}</p>
            {
              hourToSleep.map(h=>{
                return(
                  <span className="badge text-bg-primary m-1" key={h}>{h}</span>
                )
              })
            }
            <p className='mt-2 text-info'>Nota: Estos horarios concideran los 15 minutos que una persona tarda en dormirse</p>
          </div>
        </Modal>
      </div>
    </div>
  )
}