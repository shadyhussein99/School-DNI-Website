//  Component containing all information about Parent and Childs

import React, { useState } from "react";
import axios from "axios";
import ParentInformation from "./ParentInformation";
import ChildInformation from "./ChildInformation";

function AllInformation() {

    const [data, setData] = useState({
        parentName: "",
        parentBirthDate: "",
        parentEmail: "",
        parentPhone: "",
        parentGender: "Male",
        child1Fees: "",
        child1School: "",
        child2Fees: "",
        child2School: "",
        child3Fees: "",
        child3School: "",
        child4Fees: "",
        child4School: ""
    })

    //  Childs information input stats

    const [child1TotalFeesInput, setChild1TotalFeesInput] = useState(0)        // Child 1 total fees in 5 years
    const [child2TotalFeesInput, setChild2TotalFeesInput] = useState(0)        // Child 2 total fees in 5 years
    const [child3TotalFeesInput, setChild3TotalFeesInput] = useState(0)        // Child 3 total fees in 5 years
    const [child4TotalFeesInput, setChild4TotalFeesInput] = useState(0)        // Child 4 total fees in 5 years
    const [sumTotalFees, setSumTotalFees] = useState(0)                       // Total sum for all children fees for 5 years


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://c0b2-197-36-132-158.ngrok-free.app/api/InsuranceHome/AddNewInsure`, {
            ...data, totalChildrenFees: sumTotalFees
        })
    }

    return <div className="mx-10 mt-5 sm:mx-20 lg:mt-24">

        <form onSubmit={formSubmit}>

            <div className="lg:flex lg:flex-row-reverse ">
                <img src="/pics/registerPic.jpeg" alt="school-pic" className="home-img mx-auto" />

                <ParentInformation
                    parentNameInput={data.parentName}
                    parentBirthDateInput={data.parentBirthDate}
                    parentEmailInput={data.parentEmail}
                    parentPhoneInput={data.parentPhone}
                    parentGenderInput={data.parentGender}
                    handleChange={handleChange}
                />
            </div>

            <ChildInformation
                child1FeesInput={data.child1Fees}
                child1SchoolInput={data.child1School}
                child1TotalFeesInput={child1TotalFeesInput}
                setChild1TotalFeesInput={setChild1TotalFeesInput}

                child2FeesInput={data.child2Fees}
                child2SchoolInput={data.child2School}
                child2TotalFeesInput={child2TotalFeesInput}
                setChild2TotalFeesInput={setChild2TotalFeesInput}

                child3FeesInput={data.child3Fees}
                child3SchoolInput={data.child3School}
                child3TotalFeesInput={child3TotalFeesInput}
                setChild3TotalFeesInput={setChild3TotalFeesInput}

                child4FeesInput={data.child4Fees}
                child4SchoolInput={data.child4School}
                child4TotalFeesInput={child4TotalFeesInput}
                setChild4TotalFeesInput={setChild4TotalFeesInput}

                data={data}
                setData={setData}
                handleChange={handleChange}
                setSumTotalFees={setSumTotalFees}
            />

            <hr />

            <div className="grid grid-cols-4">
                <p className="col-span-1"></p>
                <p className="col-span-1"></p>
                <p className=" text-lg font-semibold col-span-1 mx-auto">{sumTotalFees}</p>
                <p className="col-span-1"></p>
            </div>

            <div className="flex justify-end">
                <button type="submit" className=" border py-3 px-16 rounded-xl text-lg font-semibold text-white bg-lime-600 mt-8 mb-20 hover:text-lime-600 hover:bg-white hover:border-lime-600 transition ease-in-out duration-300">SUBMIT</button>
            </div>

        </form>

    </div>
}

export default AllInformation