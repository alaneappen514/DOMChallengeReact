import React, { Component } from 'react';
import Table from "./Components/Table"
import './App.css';

class App extends Component{
  render(){
    return (
    <div>
    <div className = "container-fluid p-4 bg-dark text-danger text-center">
      <h6>DOM Challenge</h6>
    </div>
    <div className ="container">
     <Table />
    </div>
    </div>
  );
  }
}

export default App;
