//  Component containing all information about Parent and Childs

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParentInformation from "./ParentInformation";
import ChildInformation from "./ChildInformation";

function AllInformation() {

    //  Parent information input stats

    const [parentNameInput, setParentNameInput] = useState("")             // Tracks Parent Name input
    const [parentBirthDateInput, setParentBirthDateInput] = useState("")   // Tracks Parent Birth Date input
    const [parentEmailInput, setParentEmailInput] = useState("")           // Tracks Parent Email input
    const [parentMobileInput, setParentMobileInput] = useState("")         // Tracks Parent Mobile input
    const [parentGenderInput, setParentGenderInput] = useState("Male")         // Tracks Parent Gender input


    //  Childs information input stats

    const [child1FeesInput, setChild1FeesInput] = useState("")        // Tracks child 1 fees input
    const [child1SchoolInput, setChild1SchoolInput] = useState("")    // Tracks child 1 school input
    const [child1TotalFeesInput, setChild1TotalFeesInput] = useState(0)        // Tracks child 1 total fees input

    const [child2FeesInput, setChild2FeesInput] = useState("")        // Tracks child 2 fees input
    const [child2SchoolInput, setChild2SchoolInput] = useState("")    // Tracks child 2 school input
    const [child2TotalFeesInput, setChild2TotalFeesInput] = useState(0)        // Tracks child 2 total fees input

    const [child3FeesInput, setChild3FeesInput] = useState("")        // Tracks child 3 fees input
    const [child3SchoolInput, setChild3SchoolInput] = useState("")    // Tracks child 3 school input
    const [child3TotalFeesInput, setChild3TotalFeesInput] = useState(0)        // Tracks child 3 total fees input

    const [child4FeesInput, setChild4FeesInput] = useState("")        // Tracks child 4 fees input
    const [child4SchoolInput, setChild4SchoolInput] = useState("")    // Tracks child 4 school input
    const [child4TotalFeesInput, setChild4TotalFeesInput] = useState(0)        // Tracks child 4 total fees input

    const [sumTotalFees, setSumTotalFees] = useState(0)

    const [accepted, setAccepted] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault()

        
            console.log(parentNameInput, parentBirthDateInput, parentEmailInput, parentMobileInput, parentGenderInput, sumTotalFees);
    }

    return <div className="mx-10 mt-5 sm:mx-20 lg:mt-24">

        <form>

            <div className="lg:flex lg:flex-row-reverse ">
                <img src="/pics/registerPic.jpeg" alt="school-pic" className="home-img mx-auto" />

                <ParentInformation
                    parentNameInput={parentNameInput}
                    setParentNameInput={setParentNameInput}
                    parentBirthDateInput={parentBirthDateInput}
                    setParentBirthDateInput={setParentBirthDateInput}
                    parentEmailInput={parentEmailInput}
                    setParentEmailInput={setParentEmailInput}
                    parentMobileInput={parentMobileInput}
                    setParentMobileInput={setParentMobileInput}
                    parentGenderInput={parentGenderInput}
                    setParentGenderInput={setParentGenderInput}
                />
            </div>

            <ChildInformation
                child1FeesInput={child1FeesInput}
                setChild1FeesInput={setChild1FeesInput}
                setChild1SchoolInput={setChild1SchoolInput}
                child1SchoolInput={child1SchoolInput}
                child1TotalFeesInput={child1TotalFeesInput}
                setChild1TotalFeesInput={setChild1TotalFeesInput}

                child2FeesInput={child2FeesInput}
                setChild2FeesInput={setChild2FeesInput}
                setChild2SchoolInput={setChild2SchoolInput}
                child2SchoolInput={child2SchoolInput}
                child2TotalFeesInput={child2TotalFeesInput}
                setChild2TotalFeesInput={setChild2TotalFeesInput}

                child3FeesInput={child3FeesInput}
                setChild3FeesInput={setChild3FeesInput}
                setChild3SchoolInput={setChild3SchoolInput}
                child3SchoolInput={child3SchoolInput}
                child3TotalFeesInput={child3TotalFeesInput}
                setChild3TotalFeesInput={setChild3TotalFeesInput}

                child4FeesInput={child4FeesInput}
                setChild4FeesInput={setChild4FeesInput}
                setChild4SchoolInput={setChild4SchoolInput}
                child4SchoolInput={child4SchoolInput}
                child4TotalFeesInput={child4TotalFeesInput}
                setChild4TotalFeesInput={setChild4TotalFeesInput}

                sumTotalFees={sumTotalFees}
                setSumTotalFees={setSumTotalFees}
            />

            <hr />

            <div className="grid grid-cols-4">
                <p className="col-span-1"></p>
                <p className="col-span-1"></p>
                <p className=" text-lg font-semibold col-span-1 mx-auto">{sumTotalFees}</p>
                <p className="col-span-1"></p>
            </div>

            {accepted ? <Link to="/proposal">
                <div className="flex justify-end">
                    <button onClick={formSubmit} type="submit" className=" border py-3 px-16 rounded-xl text-lg font-semibold text-white bg-lime-600 mt-8 mb-20 hover:text-lime-600 hover:bg-white hover:border-lime-600 transition ease-in-out duration-300">SUBMIT</button>
                </div>
            </Link> :
                <Link to="">
                    <div className="flex justify-end">
                        <button onClick={formSubmit} type="submit" className=" border py-3 px-16 rounded-xl text-lg font-semibold text-white bg-lime-600 mt-8 mb-20 hover:text-lime-600 hover:bg-white hover:border-lime-600 transition ease-in-out duration-300">SUBMIT</button>
                    </div>
                </Link>}

        </form>

    </div>
}

export default AllInformation