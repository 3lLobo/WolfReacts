import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import SignupForm from './components/FormExc';
import { useState } from 'react';


function App() {

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className={darkMode ? "App--dark" : "App"}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Meme darkMode={darkMode} />
            {/* <SignupForm /> */}
            <img src={logo} alt="id1" className='App-logo' />
        </div>
    );
}

export default App;
