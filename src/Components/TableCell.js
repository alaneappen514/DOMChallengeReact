import React from "react";


const TableCell = (props) => {
    return <td className = "border border-danger p-4" onClick ={props.onClickColor}>👋</td>
};

export default TableCell;