import './App.css'

import { Navbar } from './components/navbar'

function App() {
  return (
    <>
      <Navbar/>
      <div className='banner'>
        <div className='container w-100'>
          <div className="card border-light mb-3">
            <div className="card-body">
              <form>
                <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}

export default App
