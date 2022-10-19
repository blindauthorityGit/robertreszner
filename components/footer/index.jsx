import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = (props) => {
    useEffect(() => {});

    return (
        <>
            <div className={`footer w-full col-span-12 md:col-span-9 lg:ml-[320px] mt-20 mb-32 px-6 ${props.colSpan}`}>
                <hr />
                <div className="flex justify-between mt-4">
                    <div className="left">2022 Eva Maria Schartmüller</div>
                    <div className="right flex">
                        <a className="mr-4" href={props.fb}>
                            <FaFacebook></FaFacebook>
                        </a>
                        <a className="mr-4" href={props.insta}>
                            <FaInstagram></FaInstagram>
                        </a>
                        <a className="mr-4" href={props.twitter}>
                            <FaTwitter></FaTwitter>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
