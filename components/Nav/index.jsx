import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import NavModal from "./navModal";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {});

    return (
        <>
            {/* DESKTOP NAV */}
            <nav className={`navbar px-16 h-full fixed hidden md:block md:w-[320px] pt-16 ${props.colSpan}`}>
                <div className="home uppercase text-text tracking-wide hover:text-black font-bold">
                    <Link href="/">
                        <a className="block">{props.HomeLink}</a>
                    </Link>
                </div>
                <div className="mt-32 text-right pr-16 text-text">
                    {props.MenuItems.map((e, i) => {
                        return (
                            <Link key={`link${i}`} href={`/${e}`}>
                                <a className={`fade-in block mb-3 tracking-widest hover:text-black`}>{e}</a>
                            </Link>
                        );
                    })}
                </div>
            </nav>
            {/* MOBILE NAV */}

            {modalOpen && (
                <NavModal
                    onClick={() => {
                        setModalOpen(false);
                    }}
                    klasse={modalOpen ? "slide-in-right" : "slide-out-right"}
                >
                    <div className="mt-32 text-left pl-16 text-white">
                        <Link href="/">
                            <a className="block text-2xl mb-6">{props.HomeLink}</a>
                        </Link>
                        {props.MenuItems.map((e, i) => {
                            return (
                                <Link key={`linkM${i}`} href={`/${e}`}>
                                    <a className={`fade-in block text-xl mb-6 tracking-widest hover:text-black`}>{e}</a>
                                </Link>
                            );
                        })}
                    </div>
                    <div className={`footer w-full col-span-9 lg:ml-[320px] mt-20 mb-32 px-6`}>
                        <hr className="opacity-30" />
                        <div className="flex justify-between mt-4 text-text">
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
                </NavModal>
            )}

            <div className="nav mobileNav  md:hidden col-span-12 px-6 pt-6 flex items-center justify-between">
                <div className="home uppercase text-text tracking-wide hover:text-black font-bold">
                    <Link href="/">
                        <a className="block">{props.HomeLink}</a>
                    </Link>
                </div>
                <div className="burger">
                    <div className="burgerWrapper text-2xl">
                        <GiHamburgerMenu
                            className="cursor-pointer"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        ></GiHamburgerMenu>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
