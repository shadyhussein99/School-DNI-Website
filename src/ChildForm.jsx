// Child form used to structure the child information component

import React from "react";

function ChildForm(props) {
    return <div>

        <label>{props.label}</label>
        <input placeholder="Enter fees in AED" type="number" value={props.feesValue} onChange={props.feesChange} />
        <p>{props.sumInsured}</p>
        <input onChange={props.schoolChange} type="text" value={props.schoolValue} />

    </div>
}

export default ChildForm