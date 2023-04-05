// Component of the parent information

import React from "react";
import ParentForm from "./ParentForm";

function ParentInformation(props) {

    return <div>

        <h2 className="text-3xl font-semibold">Parent info:</h2>

        <div className="mt-8">

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

            <div className="grid grid-cols-3 my-3">
                <label className="col-span-1">Gender</label>

                <select onChange={(e) => props.setParentGenderInput(e.target.value)} value={props.parentGenderInput} className="text-lg my-3 border border-gray-300 p-1 px-4 rounded-md text-gray-500 col-span-2">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

        </div>

    </div>
}

export default ParentInformation