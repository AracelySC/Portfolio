import './App.css';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.js'
import Resume from './components/Resume/Resume.jsx';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <About/>
     <Resume/>
     <Contact/>
    </div>
  );
}

export default App;
