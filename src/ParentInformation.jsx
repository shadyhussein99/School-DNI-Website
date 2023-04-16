// Component of the parent information

import React from "react";
import ParentForm from "./ParentForm";

function ParentInformation(props) {

    return <div className="xl:w-full">

        <h2 className="text-3xl font-semibold">Parent info:</h2>

        <div className="mt-8">

            <ParentForm
                label="Parent Name"
                placeholder="Parent Name"
                type="text"
                value={props.parentNameInput}
                parentInputName="parentName"
                handleChange={props.handleChange}
            />
            <ParentForm
                label="Date of Birth"
                placeholder=""
                type="date"
                value={props.parentBirthDateInput}
                parentInputName="parentBirthDate"
                handleChange={props.handleChange}
            />
            <ParentForm
                label="Email"
                placeholder="Email"
                type="email"
                value={props.parentEmailInput}
                parentInputName="parentEmail"
                handleChange={props.handleChange}
            />
            <ParentForm
                label="Mobile No"
                placeholder="Mobile Number"
                type="number"
                value={props.parentPhoneInput}
                parentInputName="parentPhone"
                handleChange={props.handleChange}
            />

            <div className="grid grid-cols-3 my-3 md:grid-cols-4 xl:grid-cols-5">
                <label className="col-span-1">Gender</label>

                <select onChange={props.handleChange} name="parentGender" value={props.parentGenderInput} className="text-lg my-3 border border-gray-300 p-1 px-4 rounded-md text-gray-500 col-span-2">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

        </div>

    </div>
}

export default ParentInformation