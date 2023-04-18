//  Component containing all information about Parent and Childs

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"   // This function helps in integration between react-hook-form and yup
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

    const [child1TotalFeesInput, setChild1TotalFeesInput] = useState(0)        // Child 1 total fees in 5 years
    const [child2TotalFeesInput, setChild2TotalFeesInput] = useState(0)        // Child 2 total fees in 5 years
    const [child3TotalFeesInput, setChild3TotalFeesInput] = useState(0)        // Child 3 total fees in 5 years
    const [child4TotalFeesInput, setChild4TotalFeesInput] = useState(0)        // Child 4 total fees in 5 years
    const [sumTotalFees, setSumTotalFees] = useState(0)                       // Total sum for all children fees for 5 years

    // Form validation schema
    const schema = yup.object().shape({
        parentName: yup.string().required("*Name is required").matches(/^[a-zA-Z\s]*$/, "*Please enter a valid name"),
        parentBirthDate: yup.string().required("*Birth date is required"),
        parentEmail: yup.string().required("*Email is required").email("*Please enter a valid email"),
        parentPhone: yup.number().typeError("*Mobile number is required").positive("*Please enter a valid mobile number").integer("Please enter a valid mobile number"),
        child1Fees: yup.number().typeError("*Fees is required").positive("*Please enter a valid number"),
        child1School: yup.string().required("School name is required").matches(/^[a-zA-Z0-9\s]+$/, "Please use letters and numbers only"),
        child2Fees: yup.mixed()
            .nullable()
            .test("is-number", "*Please enter a valid number", value => {
                return !value || typeof value === "number".test(value);
            })
            .test("is-positive", "*Please enter a valid number", (value) => {
                return !value || value > 0 .test(value);
            }),
        child2School: yup.mixed()
            .nullable()
            .test("alphanumeric", "Please use letters and numbers only", value => {
                return !value || /^[a-zA-Z0-9\s]+$/.test(value);
            }),
        child3Fees: yup.mixed()
            .nullable()
            .test("is-number", "*Please enter a valid number", value => {
                return !value || typeof value === "number".test(value);
            })
            .test("is-positive", "*Please enter a valid number", (value) => {
                return !value || value > 0 .test(value);
            }),
        child3School: yup.mixed()
            .nullable()
            .test("alphanumeric", "Please use letters and numbers only", value => {
                return !value || /^[a-zA-Z0-9\s]+$/.test(value);
            }),
        child4Fees: yup.mixed()
            .nullable()
            .test("is-number", "*Please enter a valid number", value => {
                return !value || typeof value === "number".test(value);
            })
            .test("is-positive", "*Please enter a valid number", (value) => {
                return !value || value > 0 .test(value);
            }),
        child4School: yup.mixed()
            .nullable()
            .test("alphanumeric", "Please use letters and numbers only", value => {
                return !value || /^[a-zA-Z0-9\s]+$/.test(value);
            }),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)      // This for integration between react-hook-form and yup
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://c0b2-197-36-132-158.ngrok-free.app/api/InsuranceHome/AddNewInsure`, {
            ...data, totalChildrenFees: sumTotalFees
        })
    }

    return <main className="mx-10 mt-5 sm:mx-20 lg:mt-24">

        <form onSubmit={handleSubmit(onSubmit)}>

            <section className="lg:flex lg:flex-row-reverse ">
                <img src="/pics/registerPic.jpeg" alt="school-pic" className="home-img mx-auto" />

                <ParentInformation
                    handleChange={handleChange}
                    register={register}
                    errors={errors}
                />
            </section>

            <ChildInformation


                child1TotalFeesInput={child1TotalFeesInput}
                setChild1TotalFeesInput={setChild1TotalFeesInput}

                child2TotalFeesInput={child2TotalFeesInput}
                setChild2TotalFeesInput={setChild2TotalFeesInput}

                child3TotalFeesInput={child3TotalFeesInput}
                setChild3TotalFeesInput={setChild3TotalFeesInput}

                child4TotalFeesInput={child4TotalFeesInput}
                setChild4TotalFeesInput={setChild4TotalFeesInput}

                data={data}
                setData={setData}
                handleChange={handleChange}
                setSumTotalFees={setSumTotalFees}
                register={register}
                errors={errors}
            />

            <hr />

            <section className="grid grid-cols-4">
                <p className="col-span-1"></p>
                <p className="col-span-1"></p>
                <p className=" text-lg font-semibold col-span-1 mx-auto">{sumTotalFees}</p>
                <p className="col-span-1"></p>
            </section>

            <section className="flex justify-end">
                <button type="submit" className=" border py-3 px-16 rounded-xl text-lg font-semibold text-white bg-lime-600 mt-8 mb-20 hover:text-lime-600 hover:bg-white hover:border-lime-600 transition ease-in-out duration-300">SUBMIT</button>
            </section>

        </form>

    </main>
}

export default AllInformation