// Child form used to structure the child information component

import React from "react";

function ChildForm(props) {
    return <div className="grid grid-cols-4 my-3">

        <label className="col-span-1">{props.label}</label>
        <input className="col-span-1" placeholder="Enter fees in AED" type="number" {...props.register(props.feesInputName, {onChange: props.feesChange})}/>

        {props.errors[props.feesInputName] && (
            <p className="text-red-500">{props.errors[props.feesInputName].message}</p>)}

        <p className="col-span-1 m-auto text-lg font-semibold">{props.sumInsured}</p>
        <input className="col-span-1" type="text" {...props.register(props.schoolInputName, {onChange: props.schoolChange})}/>

        {props.errors[props.schoolInputName] && (
            <p className="text-red-500">{props.errors[props.schoolInputName].message}</p>)}

    </div>
}

export default ChildForm