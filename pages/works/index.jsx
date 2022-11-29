import client from "../../client";
import Head from "next/head";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import MainContainer from "../../components/layout/mainContainer";
import Link from "next/link";
// import FullWidthSwiper from "../../components/sections/fullWidthSwiper";
// import StackedImgs from "../../components/sections/stackedImgs";
// import InlineImgs from "../../components/sections/inlineImgs";
// import Breadcrumbs from "../../components/sections/breadcrumbs";

import { PortableText } from "@portabletext/react";
import { H1, H2, H3 } from "../../components/utils/headlines";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import WorksNav from "../../components/Nav/workNav";

const Works = ({ dataAll }) => {
    function ImagePropsGallery(i) {
        return useNextSanityImage(client, dataAll[i].mainImage);
    }

    function findIndex(index) {
        const i = dataAll.map((e) => e.slug.current).indexOf(index);

        return dataAll.map((e) => e.slug.current).indexOf(index);
    }
    // const imagePropsGallery = useNextSanityImage(client, post.gallery.images);

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
            <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
                <Head>
                    <title>Works</title>
                    {/* <meta name="description" content={post.seo.description} /> */}
                </Head>

                <div className="col-span-12 md:col-span-8 lg:col-span-6  flex justify-center sm:block">
                    {/* <div className="texte mt-8 px-12 md:px-0">
                        <H2 klasse="mb-10">{post.title}</H2>
                        <PortableText value={post.description}></PortableText>
                    </div> */}
                    <div className="images mt-16 grid grid-cols-12 gap-1">
                        {dataAll.map((e, i) => {
                            // counter++;
                            return (
                                <div key={`image${i}`} className="mb-8 col-span-12 lg:col-span-6 overflow-hidden">
                                    <Link href={`/works/${e.slug.current}`}>
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
                                                // onLoad={() => {
                                                //     setImage(i);
                                                // }}
                                            />
                                        </a>
                                    </Link>
                                    {e.title && (
                                        <div className="caption mt-2 text-sm text-text font-[300] italic">
                                            {e.title}
                                        </div>
                                    )}
                                </div>
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
    const dataAll = await resAll;

    return {
        props: {
            dataAll,
        },
    };
};
