import React, { Component } from 'react';
import {Col, Preloader} from 'react-materialize';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
	historicalData: null,
	currency: 'PHP'
    };
  }

  getBitcoinData () {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}`)
      .then(response => response.json())
      .then(historicalData => this.setState({historicalData}))
      .catch(e => e)
  }

  componentDidMount () {
    this.getBitcoinData();
    this.interval = setInterval(() => this.getBitcoinData(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let content;

    if ( !this.state.historicalData ) {
        content = <Col s={4}><Preloader flashing/></Col>;
    } else {
        content = Object.keys(this.state.historicalData.bpi).map((key) => 
            <li key={key}>
                {key}: {this.state.historicalData.bpi[key]}
            </li>
        );
    }

    return (
      <div>
        <Header title='Hey'/>
        <div id='content'>
            <ul>{content}</ul>
        </div>
      </div>
    );
  }
}

export default App;
