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
            <nav className={`worksNav grid grid-cols-12 col-span-12 ${props.colSpan}`}>
                <div className="wrapper col-span-12 px-6 lg:px-0 lg:col-span-6 flex justify-between">
                    <div className="left">
                        <HiOutlineChevronLeft></HiOutlineChevronLeft>
                        <Link href={`/works/${props.previous}`}>
                            <a className="block">{props.previous}</a>
                        </Link>
                    </div>
                    <div className="right">
                        <HiOutlineChevronRight></HiOutlineChevronRight>
                        <Link href={`/works/${props.next}`}>
                            <a className="block">{props.next}</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default WorksNav;
