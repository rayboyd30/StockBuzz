import React, { Component } from 'react';
import ResultsContainer from "./ResultsContainer"
import "./SearchBar.css"
import axios from "axios"

class SearchBar extends Component {
  state = {
      assets: [],
      searchTerm: ""
  }

  editSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value})
    this.search()
  }

  search () {
    let result = [];
      if (this.state.searchTerm && this.state.searchTerm !== '' && this.state.searchTerm.length > 2) {
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchTerm}&apikey=<ApiKey>`).then(res => {
          if (res.data && res.data.bestMatches) {
            result = res.data.bestMatches.map(item => ({
              ticker: item["1. symbol"],
              name: item["2. name"]
            }));
            this.setState({assets: result})
          }
        })
      }
      this.setState({assets: []})
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
        <ResultsContainer results={this.state.assets}/>
    </div>
    )
  }
}

export default SearchBar