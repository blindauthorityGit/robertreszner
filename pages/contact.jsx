import React, { useState, useEffect } from "react";
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
    // useEffect(() => {
    //     console.log(dataStart, dataNews);
    // }, []);

    return (
        <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
            <Head>
                <title>Eva Maria Schartmüller</title>
            </Head>

            <div className="col-span-12 md:col-span-6 sm:pt-28">
                <div className="texte mt-8 px-12 md:px-0">
                    <p>{dataStart.email}</p>
                    <p>{dataStart.phone}</p>
                    <p>{dataStart.description}</p>
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
    };
};
