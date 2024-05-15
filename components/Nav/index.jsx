import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import NavModal from "./navModal";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import useStore from "../../store/store"; // adjust the path as necessary

const Navbar = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { language, setLanguage } = useStore();

    useEffect(() => {});

    return (
        <>
            {/* DESKTOP NAV */}
            <nav className={`navbar px-12 h-full fixed hidden md:block md:w-[320px] pt-16 ${props.colSpan}`}>
                <div
                    style={{ fontWeight: "300", marginTop: "-5px" }}
                    className="home uppercase text-text tracking-wide font-regular hover:text-black text-right text-lg"
                >
                    <Link href="/">
                        <a className="block font-medium">{props.HomeLink}</a>
                    </Link>
                </div>
                <div className="mt-16 text-right text-sm text-text">
                    {props.MenuItems.map((e, i) => {
                        console.log(e);
                        return (
                            <Link key={`link${i}`} href={`/${e.de}`}>
                                <a className={`fade-in block mb-2 font-[300] tracking-widest hover:text-black`}>
                                    {language == "DE" ? e.de : e.en}
                                </a>
                            </Link>
                        );
                    })}
                </div>
                <div className="text-right text-text text-sm ">
                    {props.MenuItemsLower.map((e, i) => {
                        return (
                            <Link key={`link${i}`} href={`/${e.de}`}>
                                <a className={`fade-in block mb-2 font-[300] tracking-widest hover:text-black`}>
                                    {" "}
                                    {language == "DE" ? e.de : e.en}
                                </a>
                            </Link>
                        );
                    })}
                </div>
                <div className="lang text-right mt-8">
                    <span className="cursor-pointer hover:opacity-40" onClick={() => setLanguage("DE")}>
                        DE
                    </span>{" "}
                    |{" "}
                    <span className="cursor-pointer hover:opacity-40" onClick={() => setLanguage("EN")}>
                        EN
                    </span>
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
                    <div className="mt-6 text-left pl-6 text-text">
                        <Link href="/">
                            <a className="block text-base font-[300]  mb-6 uppercase">{props.HomeLink}</a>
                        </Link>
                        {props.MenuItems.map((e, i) => {
                            return (
                                <Link key={`linkM${i}`} href={`/${e}`}>
                                    <a
                                        onClick={() => {
                                            setModalOpen(false);
                                        }}
                                        className={`fade-in font-[300] block text-regular mb-2 tracking-wide hover:text-black`}
                                    >
                                        {e}
                                    </a>
                                </Link>
                            );
                        })}
                        <div className=" text-left font-[300] text-black text-base tracking-wide block">
                            {props.MenuItemsLower.map((e, i) => {
                                return (
                                    <Link key={`link${i}`} href={`/${e}`}>
                                        <a
                                            onClick={() => {
                                                setModalOpen(false);
                                            }}
                                            className={`fade-in block mb-2 tracking-wide hover:text-black`}
                                        >
                                            {e}
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className={`footer md:w-[50%] h-12 mb-12 pl-6 pr-6 sm:pr-0 sm:pl-12 w-full col-span-12 md:col-span-6 md:ml-[320px] mt-20  font-[300] text-text `}
                    >
                        <hr />
                        <div className="flex justify-between mt-4 text-text">
                            <div className="left">
                                2024 <span className="text-xs">by robert reszner</span>
                            </div>
                            {/* <div className="right flex text-[#949494]">
                                <a className="mr-4" href={props.insta}>
                                    <FaInstagram></FaInstagram>
                                </a>
                                <a className="mr-4" href={props.twitter}>
                                    <FaTwitter></FaTwitter>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </NavModal>
            )}

            <div className="nav mobileNav text-base font-[300] md:hidden col-span-12 px-6 pt-6 flex items-center justify-between">
                <div className="home uppercase text-text tracking-wide hover:text-black ">
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
