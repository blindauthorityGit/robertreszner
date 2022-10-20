import client from "../../client";
import Head from "next/head";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import MainContainer from "../../components/layout/mainContainer";
// import FullWidthSwiper from "../../components/sections/fullWidthSwiper";
// import StackedImgs from "../../components/sections/stackedImgs";
// import InlineImgs from "../../components/sections/inlineImgs";
// import Breadcrumbs from "../../components/sections/breadcrumbs";

import { PortableText } from "@portabletext/react";
import { H1, H2, H3 } from "../../components/utils/headlines";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import WorksNav from "../../components/Nav/workNav";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export const getStaticPaths = async () => {
    const res = await client.fetch(`*[_type in ["work"] ]`);
    const data = await res;

    const paths = data.map((e) => {
        return {
            params: { slug: e.slug.current },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await client.fetch(`*[_type == "work" && slug.current == "${slug}"]
    `);
    const data = await res;

    const resAll = await client.fetch(`*[_type in ["work"] ]`);
    const dataAll = await resAll;

    return {
        props: {
            post: data[0],
            dataAll,
        },
    };
};

const Work = ({ post, dataAll }) => {
    function ImagePropsGallery(i) {
        return useNextSanityImage(client, post.gallery.images[i]);
    }
    const imageProps = useNextSanityImage(client, post.mainImage);

    function findIndex(index) {
        const i = dataAll.map((e) => e.slug.current).indexOf(index);

        return dataAll.map((e) => e.slug.current).indexOf(index);
    }
    // const imagePropsGallery = useNextSanityImage(client, post.gallery.images);

    useEffect(() => {
        console.log(post);
        console.log(dataAll.length, findIndex(post.slug.current));
        console.log(dataAll);
    }, []);

    return (
        <>
            <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
                <Head>
                    <title>{post.seo.title}</title>
                    <meta name="description" content={post.seo.description} />
                </Head>

                <div className="col-span-12 md:col-span-8">
                    <Image
                        {...imageProps}
                        layout="responsive"
                        objectFit="cover"
                        alt="hero"
                        sizes="(max-height: 550px) 100%, 550px"
                    />
                    <div className="texte mt-8 px-12 md:px-0">
                        <H2 klasse="mb-10">{post.title}</H2>
                        <PortableText value={post.description}></PortableText>
                    </div>
                    <div className="images mt-16 grid grid-cols-12 gap-4">
                        {post.gallery.images.map((e, i) => {
                            // counter++;
                            return (
                                <>
                                    {e.captionTop && (
                                        <div className="caption col-span-12 pb-2 text-text italic">{e.captionTop}</div>
                                    )}
                                    <div
                                        key={`image${i}`}
                                        className={`${
                                            e.big ? "col-span-12" : "col-span-12 sm:col-span-6 lg:col-span-4"
                                        } mb-8`}
                                    >
                                        <Image
                                            {...ImagePropsGallery(i)}
                                            layout="responsive"
                                            objectFit="cover"
                                            alt="hero"
                                            sizes="(max-height: 550px) 100%, 550px"
                                        />
                                        {e.caption && <div className="caption mt-2 text-text italic">{e.caption}</div>}
                                    </div>{" "}
                                </>
                            );
                        })}
                    </div>
                    <div className="bottomtext">
                        <PortableText value={post.descriptionBottom}></PortableText>
                    </div>
                </div>
                <WorksNav
                    previous={
                        findIndex(post.slug.current) >= 1 && dataAll[findIndex(post.slug.current) - 1].slug.current
                    }
                    next={
                        dataAll.length - 1 > findIndex(post.slug.current) &&
                        dataAll[findIndex(post.slug.current) + 1].slug.current
                    }
                ></WorksNav>
            </MainContainer>
        </>
    );
};

export default Work;
