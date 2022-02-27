import logo from "./logo.svg";
import goku from "./goku-2019.png"
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar love="11" transp="10%" goku={goku} ></Navbar>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Footer></Footer>
        </div>
    );
}

export default App;
