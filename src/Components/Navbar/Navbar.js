import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div className='Nav-bar-container'>Navbar

        <Link to='/insert'> <button>insert</button></Link>
        <Link to='/update'> <button>update</button></Link>

    </div>
  )
}

export default Navbar