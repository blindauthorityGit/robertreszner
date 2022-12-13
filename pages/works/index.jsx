import client from "../../client";
import Head from "next/head";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import MainContainer from "../../components/layout/mainContainer";
import Link from "next/link";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const Works = ({ dataAll }) => {
    function ImagePropsGallery(i) {
        return useNextSanityImage(client, dataAll[i].mainImage);
    }

    function findIndex(index) {
        const i = dataAll.map((e) => e.slug.current).indexOf(index);

        return dataAll.map((e) => e.slug.current).indexOf(index);
    }

    useEffect(() => {
        console.log(dataAll);
    }, []);

    function onEnter(e) {
        e.target.style.transform = "scale(1.2)";
    }
    function onLeave(e) {
        e.target.style.transform = "scale(1)";
    }

    return (
        <>
            <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] pl-12 overflow-hidden mb-64">
                <Head>
                    <title>Works</title>
                    {/* <meta name="description" content={post.seo.description} /> */}
                </Head>

                <div className="col-span-12 md:col-span-8 lg:col-span-6 pt-16 flex justify-center sm:block">
                    <p>selected works</p>
                    <div className="images mt-12  ">
                        {dataAll.map((e, i) => {
                            // counter++;
                            return (
                                <>
                                    {e.title && (
                                        <Link href={`/works/${e.slug.current}`}>
                                            <a className="caption block  text-sm text-text font-[300] ">{e.title}</a>
                                        </Link>
                                    )}
                                    {/* <Link href={`/works/${e.slug.current}`}>
                                        <a className="aspect-video md:aspect-4/3 h-48 block relative ">
                                            <Image
                                                {...ImagePropsGallery(i)}
                                                layout="fill"
                                                objectFit="responsive"
                                                alt="hero"
                                                sizes="(max-height: 550px) 100%, 550px"
                                                className="transition duration-500"
                                                onMouseEnter={(e) => {
                                                    onEnter(e);
                                                }}
                                                onMouseLeave={(e) => {
                                                    onLeave(e);
                                                }}
                                            />
                                        </a>
                                    </Link>
                                    {e.title && (
                                        <div className="caption mt-2 text-sm text-text font-[300] italic">
                                            {e.title}
                                        </div>
                                    )} */}
                                </>
                            );
                        })}
                    </div>
                </div>
            </MainContainer>
        </>
    );
};

export default Works;

export const getStaticProps = async (context) => {
    const resAll = await client.fetch(`*[_type in ["work"] ]`);
    const dataAll = await resAll.sort((a, b) =>
        a._createdAt < b._createdAt ? -1 : a._createdAt > b._createdAt ? 1 : 0
    );

    return {
        props: {
            dataAll,
        },
    };
};