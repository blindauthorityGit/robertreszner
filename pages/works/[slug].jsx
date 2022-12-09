import client from "../../client";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
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
// VIDEO
import VideoJS from "../../components/video";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import videojs from "video.js";
import "video.js/dist/video-js.css";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Work = ({ post, dataAll }) => {
    const [vid, setVid] = useState(post.video);
    const [vids, setVids] = useState(post.videos);
    const videoRef = useRef();
    const imgRefs = useRef([]);

    const [videoDimensions, setVideoDimensions] = useState({});

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: vid,
                type: "video/mp4",
            },
        ],
    };

    function controls(i) {
        return {
            autoplay: false,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [
                {
                    src: vids[i].link,
                    type: "video/mp4",
                },
            ],
        };
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => {
            videojs.log("player is waiting");
        });

        player.on("dispose", () => {
            videojs.log("player will dispose");
        });
    };

    useEffect(() => {
        console.log(post);
    }, []);

    useEffect(() => {
        console.log(imgRefs.current[0].clientWidth);
        setVideoDimensions({
            width: imgRefs.current[0].clientWidth,
            height: imgRefs.current[0].clientHeight,
        });
        console.log(videoDimensions);
    }, [imgRefs.current]);

    useEffect(() => {
        setVid(post.video);
        setVids(post.videos);
        console.log(post.video, post.videos);

        return () => {
            setVid(null);
        };
    }, [post, vid, vids]);

    function findIndex(index) {
        const i = dataAll.map((e) => e.slug.current).indexOf(index);

        return dataAll.map((e) => e.slug.current).indexOf(index);
    }
    // const imagePropsGallery = useNextSanityImage(client, post.gallery.images);

    return (
        <>
            <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
                <Head>
                    <title>{post.seo.title}</title>
                    <meta name="description" content={post.seo.description} />
                </Head>

                <div className="col-span-12 md:col-span-8">
                    <div className="imgwrapper aspect-4/3 relative max-h-[20rem]">
                        <Image
                            // {...imageProps}
                            src={urlFor(post.mainImage).width(200).height(280).url()}
                            loader={() => urlFor(post.mainImage).url()}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                        />
                    </div>
                    <div className="texte mt-8 px-12 md:px-0">
                        <H2 klasse="mb-10">{post.title}</H2>
                        <PortableText value={post.description}></PortableText>
                    </div>
                    {/* {vid ? <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> : null} */}
                    {vids
                        ? vids.map((e, i) => {
                              console.log(controls(i));
                              return (
                                  <div key={`key${i}`} className="mb-8">
                                      <VideoJS options={controls(i)} onReady={handlePlayerReady} />
                                  </div>
                              );
                          })
                        : null}

                    {/* <ReactPlayer url={throwFinal} /> */}
                    <div className="images mt-8 grid grid-cols-12 gap-4">
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
                                        } mb-4 relative aspect-video`}
                                        ref={(ref) => (imgRefs.current[i] = ref)}
                                    >
                                        <Image
                                            // {...ImagePropsGallery(i)}
                                            src={urlFor(e).width(200).height(280).url()}
                                            loader={() => urlFor(e).url()}
                                            layout="fill"
                                            loading="lazy"
                                            objectFit="cover"
                                            alt="hero"
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
