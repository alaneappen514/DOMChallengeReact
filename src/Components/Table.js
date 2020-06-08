import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component{
    constructor(){
        super();
        this.state = {
            cols: 0,
            rows: 0,
            color: '',
        }
        this.baseState = this.state;
    }


    addCols = () =>{
        this.setState({cols: this.state.cols + 1 })
    }
    
    addRows = () => {
        this.setState({rows: this.state.rows + 1})
        
    }

    deleteCols = () =>{
        this.setState({cols: this.state.cols -1})
    }
    
    deleteRows = () => {
        this.setState({rows: this.state.rows -1})
    }

    selectedColor = (event) => {
        this.setState({color: event.target.value});
    }

    onClickColor = (event) => {
        event.target.style.backgroundColor =this.state.color;
    }
    clearState = (event) => {
       this.setState({...this.baseState})
    }




    render(){
        console.log(this.state.color)
        let tableRows = [];

        for(let i = 0; i< this.state.rows; i++)
        {
            tableRows.push(<TableRow cols={this.state.cols} color = {this.state.color} onClickColor = {this.onClickColor} />)
        }
     
        return(
        <div>
        <div className = "d-flex justify-content-between mt-5">
        <div className ="d-flex">
       <button className = "btn btn-danger" onClick = {this.addRows}>Add Rows</button>
       <div className = " ml-3 mt-2 border border-danger p-2">{this.state.rows}</div>
       </div>
       <div className ="d-flex">
       <button className = "btn btn-danger" onClick = {this.addCols}>Add Columns</button>
       <div className = " ml-3 mt-2 border border-danger p-2">{this.state.cols}</div>
       </div>
       <button className = "btn btn-danger" onClick = {this.deleteRows}>Delete Rows</button>
       <button className = "btn btn-danger" onClick = {this.deleteCols}>Delete Columns</button>
       <select  onChange = {this.selectedColor}>
           <option  value="" disabled selected>Choose Color</option>
           <option className="bg-danger" value="red">Red</option>
           <option  className="bg-primary" value="blue">Blue</option>
           <option  className="bg-success" value="green">Green</option>
           <option  className="bg-warning" value="yellow">Yellow</option>
       </select>
       </div>
       <div className = "d-flex justify-content-center align-items-center mt-4">
       <table>
           {tableRows}
       </table>
       <button className = "btn btn-danger" onClick = {this.clearState}>Clear</button>
       </div>
       </div>
        );
    }
}
export default Table;