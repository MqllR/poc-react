import React, { Component } from 'react';
import {Section, Col, Preloader} from 'react-materialize';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super();
    this.state = {historicalData: null, currency: 'PHP'};
  }

  getBitcoinData () {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}`)
      .then(response => response.json())
      .then(historicalData => this.setState({historicalData}))
      .catch(e => e)
  }

  componentDidMount () {
    this.getBitcoinData()
  }

  render() {

    let content = "";

    if ( ! this.state.historicalData ) {
        content = <Col s={4}><Preloader flashing/></Col>;
    } else {
        console.log(this.state.historicalData);
    }

    return (
      <div>
	    <header>
              <Header title='Hey'/>
	    </header>
        <Section>
          {content}
        </Section>
      </div>
    );
  }
}

export default App;
