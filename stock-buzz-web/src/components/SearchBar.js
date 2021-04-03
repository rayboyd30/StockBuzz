import React, { Component } from 'react';
import ResultsContainer from "./ResultsContainer"
import "./SearchBar.css"

class SearchBar extends Component {
  BarStyling = {width:"100%", background:"#F2F1F9", border:"1px solid grey", borderRadius:"5px", padding:"0.5rem"};
  state = {
      assets: [
        {name: "Apple", ticker: "AAPL"},
        {name: "Microsoft", ticker: "MSFT"},
        {name: "Tesla", ticker: "TSLA"},
        {name: "Alphabet Inc.", ticker: "GOOG"}
      ],
      searchTerm: ""
  }
  editSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  search = () => {
    let result = [];
    if (this.state.searchTerm && this.state.searchTerm !== '') {
      result = this.state.assets.filter(asset => asset.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || asset.ticker.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    return result;
  }

  render (){
    return (
    <div>
        <input 
        className="search-bar"
        key="searchBar"
        value={this.state.searchTerm}
        placeholder={"search for a stock or crypto currency"}
        onChange={this.editSearchTerm}
        />
        <ResultsContainer results={this.search()}/>
    </div>
    )
  }
}

export default SearchBar