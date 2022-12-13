import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Footer = (props) => {
    const footerRef = useRef(null);
    const [distanceToBottom, setDistanceToBottom] = useState(0);

    useEffect(() => {
        setDistanceToBottom(window.innerHeight - footerRef.current.clientHeight);
        console.log(window.innerHeight, document.body.scrollHeight, footerRef.current.offsetTop);
    }, [distanceToBottom]);

    return (
        <>
            <div
                ref={footerRef}
                className={`footer  pl-12 w-full col-span-12 md:col-span-6 md:ml-[320px] mt-20 mb-32 font-[300] text-text px-6 ${props.colSpan}`}
            >
                <hr />
                <div className="flex justify-between mt-4">
                    <div className="left">
                        2022 <span className="text-xs">by eva maria schartmüller</span>
                    </div>
                    <div className="right flex text-[#949494]">
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