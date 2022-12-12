import React, { useState } from "react";
import MainContainer from "../layout/mainContainer";
import { useForm } from "react-hook-form";
import Error from "./error";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const FormFull = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    async function onSubmitForm(values) {
        setLoading(true);
        let config = {
            method: "post",
            // url: `http://localhost:3000/api/contact`,
            url: `/api/contact`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };
        console.log(values);

        try {
            const response = await axios(config);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="col-span-12 sm:col-span-12 grid grid-cols-12 text-text">
            <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="col-span-12 grid grid-cols-12 footer topKontakt sm:gap-2"
                action=""
            >
                <input
                    {...register("firstName", { required: false })}
                    id="firstName"
                    className="col-span-12 border border-text p-1 font-[300] hidden text-text"
                    type="text"
                    placeholder="Name"
                />
                <input
                    {...register("name", { required: true })}
                    id="name"
                    className="col-span-12 border border-text text-xs p-1 font-[300] text-text"
                    type="text"
                    placeholder="name"
                />
                {errors.name && <Error klasse="col-span-12 text-xs">Please fill in your full name</Error>}

                <input
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    className="col-span-12 border border-text text-xs p-1 font-[300]"
                    type="email"
                    placeholder="email"
                />
                {errors.email && <Error klasse="block col-span-12 text-xs">Please fill in your email</Error>}

                <input
                    {...register("phone", { required: true })}
                    name="phone"
                    id="phone"
                    className="col-span-12 border border-text text-xs p-1 font-[300]"
                    type="text"
                    placeholder="subject"
                />
                {errors.phone && <Error klasse="block col-span-12 text-xs">Please fill in your subject</Error>}

                <textarea
                    {...register("message", { required: true })}
                    className="col-span-12 border border-text p-1 text-xs font-[300]"
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                    placeholder="message"
                ></textarea>
                {errors.message && <Error klasse="block col-span-12 text-xs">Please fill in your message</Error>}

                <div className="check col-span-12 flex">
                    <input
                        {...register("checkbox", { required: true })}
                        id="checkbox"
                        className="mr-4"
                        type="checkbox"
                    />
                    <label htmlFor="checkbox" style={{ fontWeight: "300" }} className="text-text text-xs">
                        I agree to the processing of my data according to the privacy policy for the purpose of
                        contacting me.
                    </label>
                    {errors.checkbox && <Error klasse="block col-span-12 text-xs block">Please tick the box</Error>}
                </div>
                {loading ? (
                    <div className="w-96 flex justify-center">
                        <Rings
                            height="80"
                            width="80"
                            color="#8c8264"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
                        />
                    </div>
                ) : (
                    <div className="w-full col-span-12 flex justify-end">
                        <button
                            style={{ fontWeight: "300" }}
                            className="group  ease-in-out duration-200 hover:bg-darkBlue cursor-pointer   text-xs flex items-center justify-center   mb-12 sm:mb-0 "
                            type="submit"
                        >
                            send
                        </button>
                    </div>
                )}
            </form>
            {success ? <div className="text-primaryColor w-96 mt-4 text-xs">Thanks for your message!</div> : ""}
        </div>
    );
};

export default FormFull;
