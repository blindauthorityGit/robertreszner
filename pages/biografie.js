import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";
import { H1, H2, H3 } from "../components/utils/headlines";
import { PortableText } from "@portabletext/react";
import useStore from "../store/store"; // adjust the path as necessary

export default function About({ dataStart }) {
    // useEffect(() => {
    //     console.log(dataStart, dataNews);
    // }, []);
    const { language } = useStore();

    return (
        <MainContainer width="w-full px-6 sm:px- sm:pl-12 col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
            <Head>
                <title>Robert Reszner</title>
            </Head>

            <div className="col-span-12 md:col-span-6 sm:pt-8">
                <div className="texte mt-[-10px] sm:mt-8  md:px-0">
                    <PortableText
                        value={language == "DE" ? dataStart.description : dataStart.descriptionEN}
                    ></PortableText>
                </div>
            </div>
        </MainContainer>
    );
}

export const getStaticProps = async (context) => {
    const resStart = await client.fetch(`*[_type in ["about"]]`);
    const dataStart = await resStart[0];

    return {
        props: {
            dataStart,
        },
        revalidate: 1, // 10 seconds
    };
};
