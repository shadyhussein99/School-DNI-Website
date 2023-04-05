//  Component containing all information about Parent and Childs

import React, { useState } from "react";
import ParentInformation from "./ParentInformation";
import ChildInformation from "./ChildInformation";

function AllInformation() {

//  Parent information input stats

    const [parentNameInput, setParentNameInput] = useState("")   // Tracks Parent Name input
    const [parentBirthDateInput, setParentBirthDateInput] = useState("")   // Tracks Parent Birth Date input
    const [parentEmailInput, setParentEmailInput] = useState("")   // Tracks Parent Email input
    const [parentMobileInput, setParentMobileInput] = useState("")   // Tracks Parent Mobile input
    const [parentGenderInput, setParentGenderInput] = useState("")   // Tracks Parent Gender input
    

//  Child information input stats

    const [child1FeesInput, setChild1FeesInput] = useState("")    // Tracks child 1 fees input
    const [child1SchoolInput, setChild1SchoolInput] = useState("")    // Tracks child 1 school input

    const [child2FeesInput, setChild2FeesInput] = useState("")    // Tracks child 2 fees input
    const [child2SchoolInput, setChild2SchoolInput] = useState("")    // Tracks child 2 school input

    const [child3FeesInput, setChild3FeesInput] = useState("")    // Tracks child 3 fees input
    const [child3SchoolInput, setChild3SchoolInput] = useState("")    // Tracks child 3 school input

    const [child4FeesInput, setChild4FeesInput] = useState("")    // Tracks child 4 fees input
    const [child4SchoolInput, setChild4SchoolInput] = useState("")    // Tracks child 4 school input

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

            <ChildInformation />

            <button>Create</button>

        </form>

    </div>
}

export default AllInformation