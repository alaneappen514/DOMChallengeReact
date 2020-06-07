import React, { Component } from "react";

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            cols: 1,
            rows: 1,
            color: 'red'
        }
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

    }



    render(){
        console.log(this.state.color)
        return(
        <div className = "d-flex justify-content-between mt-5">
       <button className = "btn btn-danger">Add Rows</button>
       <button className = "btn btn-danger">Add Columns</button>
       <button className = "btn btn-danger">Delete Rows</button>
       <button className = "btn btn-danger">Delete Columns</button>
       <select  onChange = {this.selectedColor}>
           <option value disabled selected>Choose Color</option>
           <option className="bg-danger" value="red">Red</option>
           <option  className="bg-primary" value="blue">Blue</option>
           <option  className="bg-success" value="green">Green</option>
           <option  className="bg-warning" value="yellow">Yellow</option>
       </select>
       </div>

        );
    }
}
export default Table;