import client from "../../client";
import Head from "next/head";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import MainContainer from "../../components/layout/mainContainer";
import Link from "next/link";

import Image from "next/image";

const Works = ({ dataAll }) => {
    function findIndex(index) {
        const i = dataAll.map((e) => e.slug.current).indexOf(index);

        return dataAll.map((e) => e.slug.current).indexOf(index);
    }

    function onEnter(e) {
        e.target.style.transform = "scale(1.2)";
    }
    function onLeave(e) {
        e.target.style.transform = "scale(1)";
    }

    useEffect(() => {
        console.log(dataAll);
    }, []);

    return (
        <>
            <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] sm:pl-12 overflow-hidden ">
                <Head>
                    <title>Works</title>
                    {/* <meta name="description" content={post.seo.description} /> */}
                </Head>

                <div className="col-span-12 md:col-span-8 lg:col-span-6 pl-6 sm:pl-0 sm:pt-16 sm:block">
                    <p>ausgewählte Arbeiten</p>
                    <a
                        href="/formenvorgang-sml-web-close.pdf#page=5"
                        className="text-sm underline block mt-2 hover:opacity-60"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Werkkatalog
                    </a>

                    <div className="images mt-6  ">
                        {dataAll.map((e, i) => {
                            // counter++;
                            return (
                                <>
                                    {e.title && (
                                        <Link key={`worksKey${i}`} href={`/arbeiten/${e.slug.current}`}>
                                            <a className="caption block  text-sm text-text font-[300] ">{e.title}</a>
                                        </Link>
                                    )}
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
    const resAll = await client.fetch(`*[_type == "work"] | order(order asc)`);
    const dataAll = await resAll;

    return {
        props: {
            dataAll,
        },
        revalidate: 10, // 10 seconds
    };
};
