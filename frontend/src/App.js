import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Routes>
        {/* <Route to='aboutpage' element={<AboutPage/>}></Route> */}
        {/* <Route to='homepage' element={<HomePage/>}></Route> */}
        
      </Routes>
      
    </div>
  );
}

export default App;
