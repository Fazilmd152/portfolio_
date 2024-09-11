import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero section/hero';
import Nav from './Components/Navbar/nav';

function App() {
  return (
    <BrowserRouter>


    <div className="">
    <Nav/>
    <Hero/>
   </div>

   
    </BrowserRouter>
  );
}

export default App;
