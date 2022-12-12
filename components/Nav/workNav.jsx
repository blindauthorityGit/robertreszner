import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import NavModal from "./navModal";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const WorksNav = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {});

    return (
        <>
            {/* DESKTOP NAV */}
            <nav className={`worksNav grid grid-cols-12 col-span-12 md:col-span-8 lg:col-span-12 ${props.colSpan}`}>
                <div className="wrapper col-span-12 px-6 lg:px-0 md-col-span-8 lg:col-span-8 flex justify-between">
                    <div className={`left ${props.previous ? "" : ""}  text-text flex items-center py-2 px-4`}>
                        {props.previous ? (
                            <>
                                {" "}
                                <Link href={`/works/${props.previous}`}>
                                    <HiOutlineChevronLeft></HiOutlineChevronLeft>
                                </Link>
                            </>
                        ) : null}
                    </div>{" "}
                    {props.next ? (
                        <>
                            <div className="right  text-text flex items-center py-2 px-4">
                                <Link href={`/works/${props.next}`}>
                                    <HiOutlineChevronRight></HiOutlineChevronRight>
                                </Link>
                            </div>{" "}
                        </>
                    ) : null}
                </div>
            </nav>
        </>
    );
};

export default WorksNav;
