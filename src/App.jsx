import './App.css'

import { Navbar } from './components/navbar'
import { FormCalculator } from './components/calculator'
import { OffCanvas } from './components/offCanvas'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='banner'>
        <div className='container w-100'>
          <div className='row justify-content-center px-3'>
            <FormCalculator/>
          </div>
        </div>
      </div>
      <OffCanvas/>
    </>
  )
}

export default App
