import { Component } from "react"
import './App.css';
import SearchBar from "./components/SearchBar"

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="header">Welcome to Stock Buzz!</header>
        <div class="subtitle">
          Stock Buzz gives you insight into what the internet is saying about your favorite stock or crypto currency.
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
