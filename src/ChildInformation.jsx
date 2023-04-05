// Component of the child information

import React from "react";
import ChildForm from "./ChildForm";

function ChildInformation(props) {

    return <div>

        <ChildForm 
            label="School Fees (Child 1)"
            feesValue={child1FeesInput}
            feesChange={(e) => setChild1FeesInput(e.target.value)}
            sumInsured={child1FeesInput * 5}
            schoolChange={(e) => setChild1SchoolInput(e.target.value)}
            schoolValue={child1SchoolInput}
        />
        <ChildForm 
            label="School Fees (Child 2)"
            feesValue={child2FeesInput}
            feesChange={(e) => setChild2FeesInput(e.target.value)}
            sumInsured={child2FeesInput * 5}
            schoolChange={(e) => setChild2SchoolInput(e.target.value)}
            schoolValue={child2SchoolInput}
        />
        <ChildForm 
            label="School Fees (Child 3)"
            feesValue={child3FeesInput}
            feesChange={(e) => setChild3FeesInput(e.target.value)}
            sumInsured={child3FeesInput * 5}
            schoolChange={(e) => setChild3SchoolInput(e.target.value)}
            schoolValue={child3SchoolInput}
        />
        <ChildForm 
            label="School Fees (Child 4)"
            feesValue={child4FeesInput}
            feesChange={(e) => setChild4FeesInput(e.target.value)}
            sumInsured={child4FeesInput * 5}
            schoolChange={(e) => setChild4SchoolInput(e.target.value)}
            schoolValue={child4SchoolInput}
        />

    </div>
}

export default ChildInformation