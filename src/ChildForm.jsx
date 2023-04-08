// Child form used to structure the child information component

import React from "react";

function ChildForm(props) {
    return <div className="grid grid-cols-4 my-3">

        <label className="col-span-1">{props.label}</label>

        <input className="col-span-1" placeholder="Enter fees in AED" type="number" value={props.feesValue} onChange={props.feesChange} />

        <p className="col-span-1 m-auto text-lg font-semibold">{props.sumInsured}</p>

        <input className="col-span-1" onChange={props.schoolChange} type="text" value={props.schoolValue} />

    </div>
}

export default ChildForm