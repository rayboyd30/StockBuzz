import { Component } from 'react';
import Result from "./Result"

class ResultsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.results.map(result => <Result key={result.name} item={result} />)} 
            </div>
        )
    }
}

export default ResultsContainer
