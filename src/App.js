import React from 'react';

import './App.css';

import Content from './Components/Content';
import Header from './Components/Header';
import Bar from './Components/Bar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clearSelection: () => {}
    }
    
  }

  setClearSelection(func) {
    this.setState({clearSelection: func})
  }

  render() {
      return (
        <div className="App">
          <Bar clearSelection={this.state.clearSelection}/>
          <Header clearSelection={this.state.clearSelection}/>
          <Content setClearSelection={this.setClearSelection.bind(this)}/>
      </div>
      );
  }
}

export default App;
