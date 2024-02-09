import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar(){
  return (
    <div className='Nav-bar-container'>
      <h2>Military Dashboard</h2>
      <div className='Navbar-buttons-container'>
        <Link to='/details'> <button className='nav-button'>Details</button></Link>
        <Link to='/insert'> <button className='nav-button'>Insert</button></Link>
        <Link to='/update'> <button className='nav-button'>Update</button></Link>
        <Link to='/update'> <button className='nav-button'>Delete</button></Link>
      </div>

    </div>
  )
}

export default Navbar