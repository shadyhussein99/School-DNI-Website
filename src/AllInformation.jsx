//  Component containing all information about Parent and Childs

import React, { useState } from "react";
import ParentInformation from "./ParentInformation";
import ChildInformation from "./ChildInformation";

function AllInformation() {

    //  Parent information input stats

    const [parentNameInput, setParentNameInput] = useState("")             // Tracks Parent Name input
    const [parentBirthDateInput, setParentBirthDateInput] = useState("")   // Tracks Parent Birth Date input
    const [parentEmailInput, setParentEmailInput] = useState("")           // Tracks Parent Email input
    const [parentMobileInput, setParentMobileInput] = useState("")         // Tracks Parent Mobile input
    const [parentGenderInput, setParentGenderInput] = useState("")         // Tracks Parent Gender input


    //  Childs information input stats

    const [child1FeesInput, setChild1FeesInput] = useState("")        // Tracks child 1 fees input
    const [child1SchoolInput, setChild1SchoolInput] = useState("")    // Tracks child 1 school input

    const [child2FeesInput, setChild2FeesInput] = useState("")        // Tracks child 2 fees input
    const [child2SchoolInput, setChild2SchoolInput] = useState("")    // Tracks child 2 school input

    const [child3FeesInput, setChild3FeesInput] = useState("")        // Tracks child 3 fees input
    const [child3SchoolInput, setChild3SchoolInput] = useState("")    // Tracks child 3 school input

    const [child4FeesInput, setChild4FeesInput] = useState("")        // Tracks child 4 fees input
    const [child4SchoolInput, setChild4SchoolInput] = useState("")    // Tracks child 4 school input


    // Saved input stats for parents and childs on clicking (Create) button

    const [parentNameSaved, setParentNameSaved] = useState("")             // Saved Parent Name input
    const [parentBirthDateSaved, setParentBirthDateSaved] = useState("")   // Saved Parent Birth Date input
    const [parentEmailSaved, setParentEmailSaved] = useState("")           // Saved Parent Email input
    const [parentMobileSaved, setParentMobileSaved] = useState("")         // Saved Parent Mobile input
    const [parentGenderSaved, setParentGenderSaved] = useState("")         // Saved Parent Gender input

    const [child1FeesSaved, setChild1FeesSaved] = useState("")        // Saved child 1 fees input
    const [child1SchoolSaved, setChild1SchoolSaved] = useState("")    // Saved child 1 school input

    const [child2FeesSaved, setChild2FeesSaved] = useState("")        // Saved child 2 fees input
    const [child2SchoolSaved, setChild2SchoolSaved] = useState("")    // Saved child 2 school input

    const [child3FeesSaved, setChild3FeesSaved] = useState("")        // Saved child 3 fees input
    const [child3SchoolSaved, setChild3SchoolSaved] = useState("")    // Saved child 3 school input

    const [child4FeesSaved, setChild4FeesSaved] = useState("")        // Saved child 4 fees input
    const [child4SchoolSaved, setChild4SchoolSaved] = useState("")    // Saved child 4 school input
    

    const handleClick = (e) => {

        setParentNameSaved(parentNameInput)
        setParentBirthDateSaved(parentBirthDateInput)
        setParentEmailSaved(parentEmailInput)
        setParentMobileSaved(parentMobileInput)
        setParentGenderSaved(parentGenderInput)
        setChild1FeesSaved(child1FeesInput)
        setChild1SchoolSaved(child1SchoolInput)
        setChild2FeesSaved(child2FeesInput)
        setChild2SchoolSaved(child2SchoolInput)
        setChild3FeesSaved(child3FeesInput)
        setChild3SchoolSaved(child3SchoolInput)
        setChild4FeesSaved(child4FeesInput)
        setChild4SchoolSaved(child4SchoolInput)
        e.preventDefault()
    }

    return <div>

        <form>

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

            <ChildInformation
                child1FeesInput={child1FeesInput}
                setChild1FeesInput={setChild1FeesInput}
                setChild1SchoolInput={setChild1SchoolInput}
                child1SchoolInput={child1SchoolInput}

                child2FeesInput={child2FeesInput}
                setChild2FeesInput={setChild2FeesInput}
                setChild2SchoolInput={setChild2SchoolInput}
                child2SchoolInput={child2SchoolInput}

                child3FeesInput={child3FeesInput}
                setChild3FeesInput={setChild3FeesInput}
                setChild3SchoolInput={setChild3SchoolInput}
                child3SchoolInput={child3SchoolInput}

                child4FeesInput={child4FeesInput}
                setChild4FeesInput={setChild4FeesInput}
                setChild4SchoolInput={setChild4SchoolInput}
                child4SchoolInput={child4SchoolInput}
            />

            <button onClick={handleClick}>Create</button>

        </form>

    </div>
}

export default AllInformation