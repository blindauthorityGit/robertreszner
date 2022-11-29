import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { H1, H2, H3 } from "../components/utils/headlines";

import { useNextSanityImage } from "next-sanity-image";

export default function Home({ dataStart, dataNews }) {
    // useEffect(() => {
    //     console.log(dataStart, dataNews);
    // }, []);

    const imageProps = useNextSanityImage(client, dataStart.mainImage);

    return (
        <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
            <Head>
                <title>{dataStart.seo.title}</title>
            </Head>

            <div className="col-span-12 md:col-span-8">
                <div className="imgwrapper aspect-4/3 relative max-h-[26rem]">
                    <Image
                        {...imageProps}
                        layout="responsive"
                        objectFit="responsive"
                        alt="hero"
                        sizes="(max-height: 550px) 100%, 550px"
                    />
                </div>
                <div className="texte mt-6 px-6 md:px-0">
                    <H2 klasse="mb-6">UPCOMING</H2>
                    {dataNews.map((e, i) => {
                        return (
                            <div key={`news${i}`} className="textelement">
                                <PortableText value={e.description}></PortableText>
                                {i === dataNews.length - 1 ? "" : <hr className="mt-4 mb-4" />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </MainContainer>
    );
}

export const getStaticProps = async (context) => {
    const resStart = await client.fetch(`*[_type in ["home"]]`);
    const dataStart = await resStart[0];

    const resNews = await client.fetch(`*[_type in ["newsEintrag"] ]`);
    const dataNews = await resNews;

    return {
        props: {
            dataStart,
            dataNews,
        },
    };
};
