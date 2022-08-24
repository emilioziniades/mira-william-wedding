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
  "prose-headings:text-leaf",
  "prose-h1:font-sser",
  "prose-h1:text-3xl",
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

const globalStyles = makeString([
  "text-leaf",
  "flex",
  "min-h-screen",
  "flex-col",
  "items-center",
  "justify-center",
  "mx-auto",
  "shadow-lg",
  "z-1",
  "flex",
  "w-full",
  "flex-1",
  "flex-col",
  "items-center",
  "justify-center",
  "text-center",
  "font-kannada",
]);

const Home: NextPage<Props> = ({ landing, details, rsvp, registry }) => {
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={globalStyles}>
        <Navbar />

        <div className="bg-paper flex flex-col items-center">
          <div className="relative pb-16">
            <Image src={roses} placeholder="blur" className="z-2" />
            <div className="flex flex-col self-start absolute bottom-0 left-3">
              <h1 id="home" className="font-crealen text-5xl self-start">
                {landing.frontmatter.heading}
              </h1>
              <h3 className="font-crealen mt-2 tracking-widest text-lg self-start">
                {landing.frontmatter.date}
              </h3>
            </div>
          </div>
          <VerticalLine />
          <h2 className=" text-lg leading-loose mx-14">
            {landing.frontmatter.message}
          </h2>
          <HorizontalLine />
        </div>
        <div className="flex flex-col items-center">
          <h1 id="details" className="font-sser text-3xl">
            {details.frontmatter.heading}
          </h1>
          <VerticalLine />
          <div className="text-xl">
            <div>{details.frontmatter.location}</div>
            <div>{details.frontmatter.date}</div>
          </div>
          <HorizontalLine />
          <div className="font-avenir font-normal text-md">
            {details.frontmatter.message}
          </div>
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: details.content }}
          />
          <Image src={glendirkImage} placeholder="blur" className="z-2" />
          <Button
            link={details.frontmatter.buttonLink!}
            name={details.frontmatter.buttonName!}
          />
          <HorizontalLine />
          <div className="my-16" />
        </div>
        <div className="bg-paper w-full py-20 flex flex-col items-center">
          <div className="bg-white relative m-8 flex flex-col items-center z-10">
            <div className="bg-paper absolute w-5 h-5 top-0 left-0" />
            <div className="bg-paper absolute w-5 h-5 top-0 right-0" />
            <div className="bg-paper absolute w-5 h-5 bottom-0 left-0" />
            <div className="bg-paper absolute w-5 h-5 bottom-0 right-0" />
            <h1
              id="rsvp"
              className="mt-10 font-sser font-extralight text-3xl mx-8 mb-0"
            >
              {rsvp.frontmatter.heading}
            </h1>
            <p className="font-times mx-8 my-4">{rsvp.frontmatter.message}</p>
            <div className="my-10" />
            <RsvpForm submissionMessage={rsvp.frontmatter.submissionMessage!} />
          </div>
          <HorizontalLine />
        </div>
        <div className="flex flex-col items-center">
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: registry.content }}
          />
          <div className="my-10" />
          <VerticalLine />
          <Button
            link={registry.frontmatter.buttonLink!}
            name={registry.frontmatter.buttonName!}
          />
          <div className="w-2/6">
            <Image src={rosesBottom} placeholder="blur" className="z-2" />
          </div>
        </div>
        <div className="bg-paper">
          <h1>Can yu see me?</h1>
        </div>
      </main>
    </div>
  );
};

const VerticalLine = () => {
  return (
    <p className="rotate-90 tracking-tighter my-8 text-rose">
      {"· · · · · · · ·"}
    </p>
  );
};

const HorizontalLine = () => {
  return <div className="bg-leaf w-1/5 h-[1px] mb-7 mt-1" />;
};

export default Home;
