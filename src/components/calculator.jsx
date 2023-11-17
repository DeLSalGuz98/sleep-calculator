import { useEffect, useState } from 'react'

export function FormCalculator() {
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  useEffect(()=>{
    setHours(getNumbers(13))
    setMinutes(getNumbers(60))
  },[])
  const getNumbers = (number)=>{
    const newArray = []
    for (let i = 0; i < number; i++) {
      newArray.push(i) 
    }
    return newArray
  }
  return(
    <div className="card border-light mb-3 px-3 pb-3 w-md-75 w-lg-50">
      <div className="card-body">
        <p className='fs-1'>Elije la Hora</p>
        <form>
          <div className='row'>
            <div className="col-12 col-sm-4 form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4 me-3 fs-4">Hora:</label>
              <select className="form-select fs-5" id="exampleSelect1">
                { 
                  hours.map((hour)=>{
                    return <option key={hour}>{hour}</option>
                  })  
                }
              </select>
            </div>

            <div className="col-12 col-sm-4 form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4 me-3 fs-4">Minuto</label>
              <select className="form-select fs-5" id="exampleSelect1">
                {
                  minutes.map((minute)=>{
                    return <option key={minute}>{minute}</option>
                  })  
                }
              </select>
            </div>
            
            <div className="col-12 col-sm-4 form-group">
              <label htmlFor="exampleSelect1" className="form-label mt-4 me-3 fs-4">Meridiano</label>
              <select className="form-select  fs-5" id="exampleSelect1">
                <option>a.m.</option>
                <option>p.m.</option>
              </select>
            </div>
          </div>
          <div className="d-grid gap-3 mt-4 ">
            <button className="btn btn-lg btn-primary" type="button"><i className="bi bi-cloud-moon fs-3"></i> Calcular el tiempo para dormir</button>
            <button className="btn btn-lg btn-primary" type="button"><i className="bi bi-cloud-sun fs-3"></i> Calcular el tiempo para despertar </button>
          </div>
        </form>
      </div>
    </div>
  )
}