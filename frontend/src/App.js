
import './App.css';
import AboutPage from './components/AboutPage';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import ServiceScrollingPage from './components/addingpages/ServiceScrollingPage';
import ScrollToTop from './components/ScrollToTop';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import Methodologies from './components/Methodologies';
import Careers from './components/Careers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <ScrollToTop/>
      <HomePage/>
      <ServiceScrollingPage/>
      <AboutPage/>
      <ServicesPage/>
      <Methodologies/>
      <Careers/>
      {/* <Footer/> */}
     
{/* 
      <Routes>
        <Route to='aboutpage' element={<AboutPage/>}></Route>
        <Route to='homepage' element={<HomePage/>}></Route>
        
      </Routes> */}
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
