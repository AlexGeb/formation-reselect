import React, { Component } from 'react';
import Counter from './Counter';
import UsersByTeam from './UsersByTeam';
import store from './store';

const initial = store.getState();

class App extends Component {
  render() {
    console.log('render App');
    return (
      <div>
        <h1>Reselect redux state</h1>
        <Counter />
        <h3>Les équipes : </h3>
        <div style={{ marginLeft: 25 }}>
          <UsersByTeam teamId={1} />
        </div>
        <div>
          <h3>Initial state : </h3>
          <pre>{JSON.stringify(initial, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
