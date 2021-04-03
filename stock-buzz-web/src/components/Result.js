import { Component } from 'react';

class ResultsContainer extends Component {
    render() {
        return (
            <div key={`${this.props.item.name}-${this.props.item.ticker}`}>
                <div>{this.props.item.name} {this.props.item.ticker}</div>
            </div>
        )
    }
}

export default ResultsContainer
