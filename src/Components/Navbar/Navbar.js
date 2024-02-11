import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react'

import arrow from '../../Assets/Icons/downward-arrow (1).png'

function Navbar(){

  let [IsdropdownOpendetail , setIsdropdownOpendetail] = useState(false)
  let [IsdropdownOpeninsert , setIsdropdownOpeninsert] = useState(false)
  let [IsdropdownOpenupdate , setIsdropdownOpenupdate] = useState(false)
  let [IsdropdownOpendelete , setIsdropdownOpendelete] = useState(false)
  let [rotation , setrotation] = useState(0);

  const handleopendetail = () => {
    setIsdropdownOpendetail(!IsdropdownOpendetail);
    setIsdropdownOpenupdate(false);
    setIsdropdownOpeninsert(false);
    setIsdropdownOpendelete(false);
    setrotation(rotation+180);
  }

  const handleopeninsert = () => {
    setIsdropdownOpeninsert(!IsdropdownOpeninsert);
    setIsdropdownOpendetail(false);
    setIsdropdownOpenupdate(false);
    setIsdropdownOpendelete(false);
    setrotation(rotation+180);
  }

  const handleopenupdate = () => {
    setIsdropdownOpenupdate(!IsdropdownOpenupdate);
    setIsdropdownOpendetail(false);
    setIsdropdownOpeninsert(false);
    setIsdropdownOpendelete(false);
    setrotation(rotation+180);
  }

  const handleopendelete = () => {
    setIsdropdownOpendelete(!IsdropdownOpendelete);
    setIsdropdownOpendetail(false);
    setIsdropdownOpeninsert(false);
    setIsdropdownOpenupdate(false);
    setrotation(rotation+180);
  }

  return (
    <div className='Nav-bar-container'>

      <div className='Navbar-buttons-container'>
        <h2>Military Databse</h2>
      </div>

        <button className='nav-button' onClick={() => { handleopendetail() }}>Details
        <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation}deg`}}></img>
        </button>
        { IsdropdownOpendetail && (
            <div className='nav-subbutton-container' >
              <Link to='/details'> <button className='nav-button'>Soldier</button></Link>
              <button  className='nav-button'>Department</button>
              <button className='nav-button'>Posting</button>
              <button  className='nav-button'>Operation</button>
              <button className='nav-button'>Weapon</button>
              <button className='nav-button'>Location</button>
            </div>
        )}
       
        <button className='nav-button' onClick={() => { handleopeninsert() }}>Insert 
        <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation}deg`}}></img>
        </button>
        { IsdropdownOpeninsert && (
          <div className='nav-subbutton-container' >
            <Link to='/insert'> <button  className='nav-button'>Soldier</button> </Link>
            <button  className='nav-button'>Department</button>
            <button className='nav-button'>Posting</button>
            <button  className='nav-button'>Operation</button>
            <button className='nav-button'>Weapon</button>
            <button className='nav-button'>Location</button>
          </div>
        )}

        <button className='nav-button' onClick={() => { handleopenupdate() }}>Update
        <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation}deg`}}></img>
        </button>
        { IsdropdownOpenupdate && (
          <div className='nav-subbutton-container' >
            <Link to='/update'> <button className='nav-button'>Soldier</button></Link>
            <button  className='nav-button'>Department</button>
            <button className='nav-button'>Posting</button>
            <button  className='nav-button'>Operation</button>
            <button className='nav-button'>Weapon</button>
            <button className='nav-button'>Location</button>
          </div>
        )}

        <button className='nav-button' onClick={() => { handleopendelete() }}>Delete 
        <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation}deg`}}></img>
        </button>
        { IsdropdownOpendelete && (
          <div className='nav-subbutton-container' >
            <Link to='/update'> <button className='nav-button'>Soldier</button></Link>
            <button  className='nav-button'>Department</button>
            <button className='nav-button'>Posting</button>
            <button  className='nav-button'>Operation</button>
            <button className='nav-button'>Weapon</button>
            <button className='nav-button'>Location</button>
          </div>
        )}

    </div>
  )
}

export default Navbar