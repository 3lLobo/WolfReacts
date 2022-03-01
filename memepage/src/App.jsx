import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import SignupForm from './components/FormExc';


function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <SignupForm /> */}
      <img src={logo} alt="id1" className='App-logo'/>
    </div>
  );
}

export default App;
