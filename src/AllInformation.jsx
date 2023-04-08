//  Component containing all information about Parent and Childs

import React, { useState } from "react";
import { useForm } from "react-hook-form"
import ParentInformation from "./ParentInformation";
import ChildInformation from "./ChildInformation";

function AllInformation() {

    const { register, handleSubmit, errors } = useForm()

    //  Parent information input stats

    const [parentNameInput, setParentNameInput] = useState("")             // Tracks Parent Name input
    const [parentBirthDateInput, setParentBirthDateInput] = useState("")   // Tracks Parent Birth Date input
    const [parentEmailInput, setParentEmailInput] = useState("")           // Tracks Parent Email input
    const [parentMobileInput, setParentMobileInput] = useState("")         // Tracks Parent Mobile input
    const [parentGenderInput, setParentGenderInput] = useState("")         // Tracks Parent Gender input


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


    // Saved input stats for parents and childs on clicking (Submit) button

    const [parentNameSaved, setParentNameSaved] = useState("")             // Saved Parent Name input
    const [parentBirthDateSaved, setParentBirthDateSaved] = useState("")   // Saved Parent Birth Date input
    const [parentEmailSaved, setParentEmailSaved] = useState("")           // Saved Parent Email input
    const [parentMobileSaved, setParentMobileSaved] = useState("")         // Saved Parent Mobile input
    const [parentGenderSaved, setParentGenderSaved] = useState("")         // Saved Parent Gender input

   // const [child1FeesSaved, setChild1FeesSaved] = useState("")        // Saved child 1 fees input
    const [child1SchoolSaved, setChild1SchoolSaved] = useState("")    // Saved child 1 school input

   // const [child2FeesSaved, setChild2FeesSaved] = useState("")        // Saved child 2 fees input
    const [child2SchoolSaved, setChild2SchoolSaved] = useState("")    // Saved child 2 school input

   // const [child3FeesSaved, setChild3FeesSaved] = useState("")        // Saved child 3 fees input
    const [child3SchoolSaved, setChild3SchoolSaved] = useState("")    // Saved child 3 school input

   // const [child4FeesSaved, setChild4FeesSaved] = useState("")        // Saved child 4 fees input
    const [child4SchoolSaved, setChild4SchoolSaved] = useState("")    // Saved child 4 school input

    const [sumTotalFeessaved, setSumTotalFeesSaved] = useState("")


    const [data, setData] = useState({
        parentName: "",
        parentBirthDate: "",
        parentEmail: "",
        parentMobile: "",
        parentGender: "",
        setSumTotalFees: ""
    })


    const handleClick = (e) => {

setData.parentName(parentNameInput)
setData.parentBirthDate(parentBirthDateInput)
setData.parentEmail(parentEmailInput)
setData.parentMobile(parentMobileInput)
setData.parentGender(parentGenderInput)
setData.setSumTotalFees(sumTotalFees)

        ///////////////////////////////////////////////////

        setParentNameSaved(parentNameInput)
        setParentBirthDateSaved(parentBirthDateInput)
        setParentEmailSaved(parentEmailInput)
        setParentMobileSaved(parentMobileInput)
        setParentGenderSaved(parentGenderInput)
      //  setChild1FeesSaved(child1FeesInput)
        setChild1SchoolSaved(child1SchoolInput)
      //  setChild2FeesSaved(child2FeesInput)
        setChild2SchoolSaved(child2SchoolInput)
      //  setChild3FeesSaved(child3FeesInput)
        setChild3SchoolSaved(child3SchoolInput)
      //  setChild4FeesSaved(child4FeesInput)
        setChild4SchoolSaved(child4SchoolInput)
        setSumTotalFeesSaved(sumTotalFees)
        e.preventDefault()
    }

    return <div className="mx-10 mt-24 sm:mx-20">

        <form>

            <div className="lg:flex lg:flex-row-reverse ">
                <img src="/pics/registerPic.jpeg" alt="school-pic" className="home-img" />

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

            <div className="flex justify-end">
                <button onClick={handleClick} className=" border py-3 px-16 rounded-xl text-lg font-semibold text-white bg-lime-600 mt-8 mb-20 hover:text-lime-600 hover:bg-white hover:border-lime-600 transition ease-in-out duration-300">SUBMIT</button>
            </div>
        </form>

    </div>
}

export default AllInformation