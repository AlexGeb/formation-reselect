import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makePrimePowersSelector } from './redux/data/selectors';
import './App.css';

const mapStateToProps = (state, ownProps) => ({
  primePowers: makePrimePowersSelector(ownProps.dataSet)(state)
});

const PrimePowers = props => (
  <ol>
    {props.primePowers.map(primePower => (
      <li key={primePower}>{primePower}</li>
    ))}
  </ol>
);

const ConnectedComponent = connect(mapStateToProps)(PrimePowers);

class App extends Component {
  state = { datasetToggle: true };

  toggleDataSet = () => {
    this.setState(state => ({ datasetToggle: !state.datasetToggle }));
  };

  render() {
    const { datasetToggle } = this.state;
    const dataSet = datasetToggle ? 'data1' : 'data2';
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleDataSet}>Change dataset</button>{' '}
          <span>currently : dataset {dataSet}</span>
          <ConnectedComponent dataSet={dataSet} />
        </header>
      </div>
    );
  }
}

export default App;
