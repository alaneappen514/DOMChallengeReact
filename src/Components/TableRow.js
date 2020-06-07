import React from "react";
import TableCell from "./TableCell"

const TableRow = (props) => {
  
    let tableCells = []
    
    for( let i = 0; i< props.cols; i++)
    {
      tableCells.push(<TableCell onClickColor = {props.onClickColor} color = {props.color} /> )
    }
  return <tr>{tableCells}</tr>
}

export default TableRow;