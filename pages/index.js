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

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default function Home({ dataStart, dataNews }) {
    useEffect(() => {
        console.log(dataStart.mainImage, dataNews);
    }, []);

    const imageProps = useNextSanityImage(client, dataStart.mainImage);

    return (
        <MainContainer width="w-full col-span-12 md:col-span-9 pl-12 md:ml-[320px] pt-[69px] overflow-hidden">
            <Head>
                <title>{dataStart.seo.title}</title>
            </Head>

            <div className="col-span-12 md:col-span-8">
                <div
                    style={{
                        backgroundImage: `url(${urlFor(dataStart.mainImage)})`,
                        backgroundSize: "933px",
                        backgroundPositionX: "left",
                        backgroundPositionY: "center",
                    }}
                    className="imgwrapper aspect-video relative max-h-[20rem]"
                >
                    {/* <Image
                        {...imageProps}
                        layout="fill"
                        objectFit="responsive"
                        alt="hero"
                        sizes="(max-height: 550px) 100%, 550px"
                    /> */}
                    {/* <img src={urlFor(dataStart.mainImage)} alt="" /> */}
                </div>
                <div className="texte mt-6 px-6 md:px-0">
                    <H2 klasse="mb-4">UPCOMING</H2>
                    {dataNews.map((e, i) => {
                        return (
                            <div key={`news${i}`} className="textelement">
                                <PortableText value={e.description}></PortableText>
                                {i === dataNews.length - 1 ? "" : <hr className="mt-4 mb-4 w-[20%] " />}
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
