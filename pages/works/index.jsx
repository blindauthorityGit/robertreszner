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

    return (
        <>
            <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
                <Head>
                    <title>Works</title>
                    {/* <meta name="description" content={post.seo.description} /> */}
                </Head>

                <div className="col-span-12 md:col-span-6  ">
                    {/* <div className="texte mt-8 px-12 md:px-0">
                        <H2 klasse="mb-10">{post.title}</H2>
                        <PortableText value={post.description}></PortableText>
                    </div> */}
                    <div className="images mt-16 grid grid-cols-12 gap-8">
                        {dataAll.map((e, i) => {
                            // counter++;
                            return (
                                <div key={`image${i}`} className="mb-8 col-span-6 ">
                                    <Link href={`/works/${e.slug.current}`}>
                                        <a>
                                            <Image
                                                {...ImagePropsGallery(i)}
                                                layout="responsive"
                                                objectFit="cover"
                                                alt="hero"
                                                sizes="(max-height: 550px) 100%, 550px"

                                                // onLoad={() => {
                                                //     setImage(i);
                                                // }}
                                            />
                                            {e.title && <div className="caption mt-2 text-text italic">{e.title}</div>}
                                        </a>
                                    </Link>
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
