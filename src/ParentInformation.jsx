// Component of the parent information

import React from "react";
import ParentForm from "./ParentForm";

function ParentInformation(props) {   

    return <div>

    <h2>Parent info:</h2>

        <ParentForm
            label="Parent Name"
            placeholder="Parent Name"
            type="text"
            value={props.parentNameInput}
            handleChange={(e) => props.setParentNameInput(e.target.value)}
        />
        <ParentForm
            label="Date of Birth"
            placeholder=""
            type="date"
            value={props.parentBirthDateInput}
            handleChange={(e) => props.setParentBirthDateInput(e.target.value)}
        />
        <ParentForm
            label="Email"
            placeholder="Email"
            type="email"
            value={props.parentEmailInput}
            handleChange={(e) => props.setParentEmailInput(e.target.value)}
        />
        <ParentForm
            label="Mobile No"
            placeholder="Mobile Number"
            type="number"
            value={props.parentMobileInput}
            handleChange={(e) => props.setParentMobileInput(e.target.value)}
        />

        <div>
            <label className="">Gender</label>

            <select onChange={(e) => props.setParentGenderInput(e.target.value)} value={props.parentGenderInput} className="">               
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>

    </div>
}

export default ParentInformation