import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Footer></Footer>
        </div>
    );
}

export default App;
