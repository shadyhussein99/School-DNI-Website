// Parent form used to structure the parent information component

import React from "react";

function ParentForm(props) {
    return <div>

        <label>{props.label}</label>
        <input placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.handleChange} />

    </div>
}

export default ParentForm