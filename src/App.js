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
          <Bar clearSelection={this.clearSelection.bind(this)}/>
          <Header clearSelection={this.clearSelection.bind(this)}/>
          <Content setClearSelection={this.setClearSelection.bind(this)}/>
      </div>
      );
  }
}

export default App;
