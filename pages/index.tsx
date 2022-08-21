import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { useEffect, useState } from "react";

import RsvpForm from "../components/rsvpForm";
import Navbar from "../components/nav";
import Button from "../components/button";
import { getMarkdownData } from "../lib/markdown";
import { makeString } from "../lib/styling";
import type { Data } from "../lib/markdown";
import glendirkImage from "../public/glendirk-watercolor-small.png";
import vinesOne from "../public/vines-01.png";
import vinesTwo from "../public/vines-02.png";
import vinesThree from "../public/vines-03.png";
import vinesFour from "../public/vines-04.png";
import vinesFive from "../public/vines-05.png";
import vinesSix from "../public/vines-06.png";

interface Props {
  landing: Data;
  details: Data;
  accommodation: Data;
  rsvp: Data;
  registry: Data;
}

export const getStaticProps: GetStaticProps = async () => {
  const landing = await getMarkdownData("landing");
  const details = await getMarkdownData("details");
  const rsvp = await getMarkdownData("rsvp");
  const registry = await getMarkdownData("registry");
  return { props: { landing, details, rsvp, registry } };
};

const proseStyles = makeString([
  "prose",
  "prose-md",
  "max-w-none",
  "prose-headings:text-wblue",
  "prose-h1:font-sser",
  "prose-h1:text-6xl",
  "prose-h1:font-extralight",
  "prose-h1:mt-20",
  "prose-h1:mx-8",
  "prose-h2:mb-0",
  "prose-h2:font-times",
  "prose-h2:font-light",
  "prose-p:font-times",
  "prose-p:text-ash",
  "prose-p:mx-8",
  "prose-p:mt-0",
  "prose-p:mb-0",
]);

const Home: NextPage<Props> = ({ landing, details, rsvp, registry }) => {
  const [headingHeight, setHeadingHeight] = useState(0);
  const [detailsHeight, setDetailsHeight] = useState(0);
  const [rsvpHeight, setRsvpHeight] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    setHeadingHeight(document.getElementById("home")?.offsetTop!);
    setDetailsHeight(document.getElementById("details")?.offsetTop!);
    setRsvpHeight(document.getElementById("rsvp")?.offsetTop!);
    setDocHeight(document.getElementById("registry")?.offsetTop!);
  }, []);
  return (
    <>
      <div className="flex bg-white min-h-screen flex-col items-center justify-center w-3/4 mx-auto shadow-lg z-1">
        <Head>
          <title></title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center text-center ">
          <Image
            src={vinesOne}
            placeholder="blur"
            style={{
              position: "absolute",
              zIndex: -1,
              top: `${headingHeight}px`,
              left: "0",
            }}
          />
          <Image
            src={vinesTwo}
            placeholder="blur"
            style={{
              position: "absolute",
              zIndex: -1,
              top: "0",
              right: "0",
            }}
          />
          <Image
            src={vinesThree}
            placeholder="blur"
            style={{
              position: "absolute",
              zIndex: -1,
              top: `${detailsHeight + 200}px`,
              right: "0",
            }}
          />
          <Image
            src={vinesFour}
            placeholder="blur"
            style={{
              position: "absolute",
              zIndex: -1,
              top: `${rsvpHeight}px`,
              left: "0",
            }}
          />
          {
            // <Image
            //   src={vinesFive}
            //   placeholder="blur"
            //   style={{
            //     position: "absolute",
            //     zIndex: -1,
            //     bottom: -(docHeight - 400),
            //     left: 0,
            //   }}
            // />
            // <Image
            //   src={vinesSix}
            //   placeholder="blur"
            //   style={{
            //     position: "absolute",
            //     zIndex: -1,
            //     bottom: 0,
            //     right: 0,
            //   }}
            // />
          }
          <Navbar />
          <h1 id="home" className="font-sser text-6xl text-wblue mt-[4.3rem]">
            {landing.frontmatter.heading}
          </h1>
          <h5 className="font-sser text-mblue mt-2 mb-[2.4rem] tracking-widest text-xl">
            {landing.frontmatter.date}
          </h5>
          <Image src={glendirkImage} placeholder="blur" className="z-2" />
          <div className="bg-mblue w-4/5 h-0.5 my-10" />
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: details.content }}
          />
          <Button
            link={details.frontmatter.buttonLink!}
            name={details.frontmatter.buttonName!}
          />
          <div className="my-16" />
          <div className="bg-cream w-full">
            <h1
              id="rsvp"
              className="mt-20 font-sser font-extralight text-6xl mx-8 mb-0 text-wblue"
            >
              {rsvp.frontmatter.heading}
            </h1>
            <p className="text-ash font-times mx-8 my-4">
              {rsvp.frontmatter.message}
            </p>
            <div className="my-10" />
            <RsvpForm />
          </div>
          <div className="my-10" />
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: registry.content }}
          />
          <div className="my-10" />
          <Button
            link={registry.frontmatter.buttonLink!}
            name={registry.frontmatter.buttonName!}
          />
          <div className="my-36" id="bottom" />
        </main>
      </div>
    </>
  );
};

export default Home;
