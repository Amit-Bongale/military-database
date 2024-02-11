import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react'

import arrow from '../../Assets/Icons/downward-arrow (1).png'

function Navbar(){

  let [IsdropdownOpen , setIsdropdownOpen] = useState(false)
  let [rotation , setrotation] = useState(0);

  const handleopen = () => {
    setIsdropdownOpen(!IsdropdownOpen);
    setrotation(rotation+180);
  }

  return (
    <div className='Nav-bar-container'>

      <div className='Navbar-buttons-container'>
        <h2>Military Databse</h2>
        <Link to='/details'> <button className='nav-button'>Details</button></Link>
     
       
        <button className='nav-button' onClick={() => { handleopen() }}>Insert 
        <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation}deg`}}></img>
        </button>
        { IsdropdownOpen && (
          <div className='nav-subbutton-container' >
            <Link to='/insert'> <button  className='nav-button'>Soldier</button> </Link>
            <button  className='nav-button'>Department</button>
            <button  className='nav-button'>Operation</button>
          </div>
        )}


        <Link to='/update'> <button className='nav-button'>Update</button></Link>
        <Link to='/update'> <button className='nav-button'>Delete</button></Link>
      </div>

    </div>
  )
}

export default Navbar