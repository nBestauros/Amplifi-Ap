import React from 'react';

import './App.css';

import Content from './Components/Content';
import Header from './Components/Header';
import Bar from './Components/Bar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.clearSelection = () => {};
  }

  setClearSelection(func) {
    this.clearSelection = func;
  }

  render() {
      return (
        <div className="App">
          <Bar setClearSelection={this.setClearSelection.bind(this)}/>
          <Header setClearSelection={this.setClearSelection.bind(this)}/>
          <Content />
      </div>
      );
  }
}

export default App;
