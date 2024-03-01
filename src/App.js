import { BrowserRouter } from 'react-router-dom';
import CustomRouter from './Components/Router/Router';

import Navbar from './Components/Navbar/Navbar';

import './App.css';


function App() {
  return (
  
    <BrowserRouter>
      <div className='router-container'>
        
        <Navbar></Navbar>

        <div className='customroutes'>
          <CustomRouter> </CustomRouter>
        </div>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
