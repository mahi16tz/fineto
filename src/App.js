import logo from "./logo.svg";
import "./App.css";
import CountrySearch from "./components/countrySearch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <header className="main">
        <CountrySearch />
      </header>
    </div>
  );
}

export default App;
