// Component of the child information

import React from "react";
import ChildForm from "./ChildForm";

function ChildInformation(props) {

    return <section className="mt-16">

        <h2 className="text-3xl font-semibold">Children info:</h2>

        <section className="mt-8">

            <section className="grid grid-cols-4">
                <h5 className="child-info-h5"></h5>
                <h5 className="child-info-h5">Annual fees</h5>
                <h5 className="child-info-h5">Sum insured</h5>
                <h5 className="child-info-h5">School name</h5>
            </section>

            <ChildForm
                label="School Fees (Child 1)"
                feesChange={(e) => {
                    const { name, value } = e.target
                    props.setData({ ...props.data, [name]: value })
                    props.setChild1TotalFeesInput(5 * e.target.value)
                    props.setSumTotalFees((5 * e.target.value) + props.child2TotalFeesInput + props.child3TotalFeesInput + props.child4TotalFeesInput)
                }}
                sumInsured={props.child1TotalFeesInput}
                schoolChange={props.handleChange}
                feesInputName="child1Fees"
                schoolInputName="child1School"
                register={props.register}
                errors={props.errors}
            />

            <ChildForm
                label="School Fees (Child 2)"
                feesChange={(e) => {
                    const { name, value } = e.target
                    props.setData({ ...props.data, [name]: value })
                    props.setChild2TotalFeesInput(5 * e.target.value)
                    props.setSumTotalFees((5 * e.target.value) + props.child1TotalFeesInput + props.child3TotalFeesInput + props.child4TotalFeesInput)
                }}
                sumInsured={props.child2TotalFeesInput}
                schoolChange={props.handleChange}
                feesInputName="child2Fees"
                schoolInputName="child2School"
                register={props.register}
                errors={props.errors}
            />

            <ChildForm
                label="School Fees (Child 3)"
                feesChange={(e) => {
                    const { name, value } = e.target
                    props.setData({ ...props.data, [name]: value })
                    props.setChild3TotalFeesInput(5 * e.target.value)
                    props.setSumTotalFees((5 * e.target.value) + props.child1TotalFeesInput + props.child2TotalFeesInput + props.child4TotalFeesInput)
                }}
                sumInsured={props.child3TotalFeesInput}
                schoolChange={props.handleChange}
                feesInputName="child3Fees"
                schoolInputName="child3School"
                register={props.register}
                errors={props.errors}
            />
            
            <ChildForm
                label="School Fees (Child 4)"
                feesChange={(e) => {
                    const { name, value } = e.target
                    props.setData({ ...props.data, [name]: value })
                    props.setChild4TotalFeesInput(5 * e.target.value)
                    props.setSumTotalFees((5 * e.target.value) + props.child1TotalFeesInput + props.child2TotalFeesInput + props.child3TotalFeesInput)
                }}
                sumInsured={props.child4TotalFeesInput}
                schoolChange={props.handleChange}
                feesInputName="child4Fees"
                schoolInputName="child4School"
                register={props.register}
                errors={props.errors}
            />

        </section>
    </section>
}

export default ChildInformation