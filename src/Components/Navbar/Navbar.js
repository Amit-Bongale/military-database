import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import arrow from '../../Assets/Icons/downward-arrow (1).png'

function Navbar(){

  let [IsdropdownOpendetail , setIsdropdownOpendetail] = useState(false)
  let [IsdropdownOpeninsert , setIsdropdownOpeninsert] = useState(false)
  let [IsdropdownOpenupdate , setIsdropdownOpenupdate] = useState(false)
  let [IsdropdownOpendelete , setIsdropdownOpendelete] = useState(false)
  let [rotation1 , setrotation1] = useState(0);
  let [rotation2 , setrotation2] = useState(0);
  let [rotation3 , setrotation3] = useState(0);
  let [rotation4 , setrotation4] = useState(0);


  const handleopendetail = () => {
    setIsdropdownOpendetail(!IsdropdownOpendetail);
    setIsdropdownOpenupdate(false);
    setIsdropdownOpeninsert(false);
    setIsdropdownOpendelete(false);
    setrotation2(0);
    setrotation3(0);
    setrotation4(0);
  }

  const handleopeninsert = () => {
    setIsdropdownOpeninsert(!IsdropdownOpeninsert);
    setIsdropdownOpendetail(false);
    setIsdropdownOpenupdate(false);
    setIsdropdownOpendelete(false);
    setrotation1(0);
    setrotation3(0);
    setrotation4(0);
  }

  const handleopenupdate = () => {
    setIsdropdownOpenupdate(!IsdropdownOpenupdate);
    setIsdropdownOpendetail(false);
    setIsdropdownOpeninsert(false);
    setIsdropdownOpendelete(false);
    setrotation1(0);
    setrotation2(0);
    setrotation4(0);
  }

  const handleopendelete = () => {
    setIsdropdownOpendelete(!IsdropdownOpendelete);
    setIsdropdownOpendetail(false);
    setIsdropdownOpeninsert(false);
    setIsdropdownOpenupdate(false);
    setrotation1(0);
    setrotation2(0);
    setrotation3(0);
  }

  const imgrotate = () => {
    setrotation1(180);
  }

  const imgrotate2 = () => {
    setrotation2(rotation2+180);
  }
  const imgrotate3 = () => {
    setrotation3(rotation3+180);
  }
  const imgrotate4 = () => {
    setrotation4(rotation4+180);
  }

  return (
    <div className='Nav-bar-container'>

      <div>

        <div className='Navbar-buttons-container'>
          <h2>Military DataBase</h2>
        </div>

        <div>

          <button className='nav-main-button' onClick={() => { handleopendetail(); imgrotate(); }}>Details
          <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation1}deg`}} alt='arrow'></img>
          </button>
          { IsdropdownOpendetail && (
              <div className='nav-subbutton-container' >
                <Link to='/details'> <button className='nav-button'>Soldier</button></Link>
                <button  className='nav-button'>Department</button>
                <button className='nav-button'>Posting</button>
                <button  className='nav-button'>Operation</button>
                <button className='nav-button'>Medals</button>
              </div>  
          )}
          
          <button className='nav-main-button' onClick={() => { handleopeninsert(); imgrotate2(); }}> Insert 
          <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation2}deg`}} alt='arrow'></img>
          </button>
          { IsdropdownOpeninsert && (
            <div className='nav-subbutton-container' >
              <Link to='/insert'> <button  className='nav-button'>Soldier</button> </Link>
              <button  className='nav-button'>Department</button>
              <button className='nav-button'>Posting</button>
              <button  className='nav-button'>Operation</button>
              <button className='nav-button'>Medals</button>
            </div>
          )}

          <button className='nav-main-button' onClick={() => { handleopenupdate(); imgrotate3(); }}> Update
          <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation3}deg`}} alt='arrow'></img>
          </button>
          { IsdropdownOpenupdate && (
            <div className='nav-subbutton-container' >
              <Link to='/update'> <button className='nav-button'>Soldier</button></Link>
              <button  className='nav-button'>Department</button>
              <button className='nav-button'>Posting</button>
              <button  className='nav-button'>Operation</button>
              <button className='nav-button'>Medals</button>
            </div>
          )}

          <button className='nav-main-button' onClick={() => { handleopendelete(); imgrotate4(); }}>Delete 
          <img id='arrow-btn' src={arrow} height={20}  style={{rotate:`${rotation4}deg`}} alt='arrow'></img>
          </button>
          { IsdropdownOpendelete && (
            <div className='nav-subbutton-container' >
              <Link to='/update'> <button className='nav-button'>Soldier</button></Link>
              <button  className='nav-button'>Department</button>
              <button className='nav-button'>Posting</button>
              <button  className='nav-button'>Operation</button>
              <button className='nav-button'>Medals</button>
            </div>
          )}
            
        </div>

      </div>

    </div>
  )
}

export default Navbar