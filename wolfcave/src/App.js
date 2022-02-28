import logo from "./logo.svg";
import goku from "./goku-2019.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./components/Data";

function App() {
    const cards = data.map((dat) => {
        return Card(dat, goku);
    });

    return (
        <div className="App">
            <Navbar love="11" transp="10%" goku={goku}></Navbar>
            <section className="cards-list">{cards}</section>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Footer></Footer>
        </div>
    );
}

export default App;

// ✅
