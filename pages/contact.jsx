import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";
import { H1, H2, H3 } from "../components/utils/headlines";
import { PortableText } from "@portabletext/react";
import FormFull from "../components/form";

export default function Contact({ dataStart }) {
    const pRef = useRef(null);
    useEffect(() => {
        console.log(dataStart);
        pRef.current.style.marginTop = "-3px!important";
    }, []);

    return (
        <MainContainer width="w-full col-span-12 sm:pl-12 sm:pt-16 md:col-span-9 md:ml-[320px] overflow-hidden ">
            <Head>
                <title>Eva Maria Schartmüller</title>
            </Head>

            <div className="col-span-12 md:col-span-8 ">
                <div className="texteContact px-6 sm:px-12 md:px-0">
                    <p ref={pRef} className="mt-0" style={{ marginTop: "-3px!important" }}>
                        {dataStart.email}
                        <br />
                        {dataStart.phone}
                    </p>
                    <p className="pDescri" style={{ margin: "3rem 0 4rem 0!important" }}>
                        {dataStart.description}
                    </p>
                    {/* <PortableText value={dataStart.description}></PortableText> */}
                    <FormFull></FormFull>
                </div>
            </div>
        </MainContainer>
    );
}

export const getStaticProps = async (context) => {
    const resStart = await client.fetch(`*[_type in ["kontakt"]]`);
    const dataStart = await resStart[0];

    return {
        props: {
            dataStart,
        },
        revalidate: 1, // 10 seconds
    };
};
