import './App.css'

import { Navbar } from './components/navbar'
import { FormCalculator } from './components/calculator'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='banner'>
        <div className='container w-100'>
          <FormCalculator/>
        </div>
      </div>    
    </>
  )
}

export default App
