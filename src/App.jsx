import './App.css'

import { Navbar } from './components/navbar'
import { FormCalculator } from './components/calculator'
import { OffCanvas } from './components/offCanvas'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='banner pt-3'>
        <div className='container w-100 '>
          <div className='row justify-content-center align-items-center px-3 pb-3'>
            <FormCalculator/>
          </div>
        </div>
      </div>
      <OffCanvas/>
    </>
  )
}

export default App
