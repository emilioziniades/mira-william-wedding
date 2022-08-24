import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/future/image";

import RsvpForm from "../components/rsvpForm";
import Navbar from "../components/nav";
import Button from "../components/button";
import { getMarkdownData } from "../lib/markdown";
import { makeString } from "../lib/styling";
import type { Data } from "../lib/markdown";
import glendirkImage from "../public/glendirk-watercolor-small.png";
import roses from "../public/top-roses.png";
import rosesBottom from "../public/bottom-rose.png";

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
  return (
    <>
      <div className="flex bg-white min-h-screen flex-col items-center justify-center mx-auto shadow-lg z-1">
        <Head>
          <title></title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center text-center ">
          <Navbar />
          <Image src={roses} placeholder="blur" className="z-2" />
          <h1 id="home" className="font-sser text-6xl text-wblue mt-[4.3rem]">
            {landing.frontmatter.heading}
          </h1>
          <h5 className="font-sser text-mblue mt-2 mb-[2.4rem] tracking-widest text-xl">
            {landing.frontmatter.date}
          </h5>
          <div className="border-r-4 border-red-300 border-dotted h-20" />
          <h2 className=" text-4xl ">{landing.frontmatter.message}</h2>
          <div className="bg-mblue w-1/5 h-0.5 my-10" />
          <h1
            id="details"
            className="font-sser text-6xl text-wblue mt-[4.3rem]"
          >
            {details.frontmatter.heading}
          </h1>
          <div className="border-r-4 border-red-300 border-dotted h-20" />
          <div>{details.frontmatter.location}</div>
          <div>{details.frontmatter.date}</div>
          <div className="bg-mblue w-1/5 h-0.5 my-10" />
          <div>{details.frontmatter.message}</div>
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: details.content }}
          />
          <Image src={glendirkImage} placeholder="blur" className="z-2" />
          <Button
            link={details.frontmatter.buttonLink!}
            name={details.frontmatter.buttonName!}
          />
          <div className="bg-mblue w-1/5 h-0.5 my-10" />
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
            <RsvpForm submissionMessage={rsvp.frontmatter.submissionMessage!} />
            <div className="bg-mblue w-1/5 h-0.5 my-10" />
          </div>
          <div className="my-10" />
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: registry.content }}
          />
          <div className="my-10" />
          <div className="border-r-4 border-red-300 border-dotted h-20" />
          <Button
            link={registry.frontmatter.buttonLink!}
            name={registry.frontmatter.buttonName!}
          />
          <Image src={rosesBottom} placeholder="blur" className="z-2" />
          <div className="my-36" id="bottom" />
        </main>
      </div>
    </>
  );
};

export default Home;
