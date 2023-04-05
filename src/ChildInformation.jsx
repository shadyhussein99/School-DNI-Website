// Component of the child information

import React from "react";
import ChildForm from "./ChildForm";

function ChildInformation(props) {

    return <div>

        <ChildForm 
            label="School Fees (Child 1)"
            feesValue={props.child1FeesInput}
            feesChange={(e) => props.setChild1FeesInput(e.target.value)}
            sumInsured={props.child1FeesInput * 5}
            schoolChange={(e) => props.setChild1SchoolInput(e.target.value)}
            schoolValue={props.child1SchoolInput}
        />
        <ChildForm 
            label="School Fees (Child 2)"
            feesValue={props.child2FeesInput}
            feesChange={(e) => props.setChild2FeesInput(e.target.value)}
            sumInsured={props.child2FeesInput * 5}
            schoolChange={(e) => props.setChild2SchoolInput(e.target.value)}
            schoolValue={props.child2SchoolInput}
        />
        <ChildForm 
            label="School Fees (Child 3)"
            feesValue={props.child3FeesInput}
            feesChange={(e) => props.setChild3FeesInput(e.target.value)}
            sumInsured={props.child3FeesInput * 5}
            schoolChange={(e) => props.setChild3SchoolInput(e.target.value)}
            schoolValue={props.child3SchoolInput}
        />
        <ChildForm 
            label="School Fees (Child 4)"
            feesValue={props.child4FeesInput}
            feesChange={(e) => props.setChild4FeesInput(e.target.value)}
            sumInsured={props.child4FeesInput * 5}
            schoolChange={(e) => props.setChild4SchoolInput(e.target.value)}
            schoolValue={props.child4SchoolInput}
        />

    </div>
}

export default ChildInformation