// Parent form used to structure the parent information component

import React from "react";

function ParentForm(props) {
    return <div className="grid grid-cols-3 my-3 md:grid-cols-4 xl:grid-cols-5">

        <label className="col-span-1">{props.label}</label>
        <input className="col-span-2" placeholder={props.placeholder} type={props.type} {...props.register(props.registerName, {onChange: props.handleChange})}/>

    </div>
}

export default ParentForm