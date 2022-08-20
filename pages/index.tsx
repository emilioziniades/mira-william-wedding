import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import RsvpForm from "../components/rsvpForm";
import Navbar from "../components/nav";
import { getMarkdownData } from "../lib/markdown";
import type { Data } from "../lib/markdown";
import glendirkImage from "../public/glendirk-watercolor-small.png";

interface Props {
  landing: Data;
  details: Data;
  accommodation: Data;
  rsvp: Data;
  gifts: Data;
}

export const getStaticProps: GetStaticProps = async () => {
  const landing = await getMarkdownData("landing");
  const details = await getMarkdownData("details");
  const rsvp = await getMarkdownData("rsvp");
  const gifts = await getMarkdownData("gifts");
  return { props: { landing, details, rsvp, gifts } };
};

const proseStyles = [
  "prose",
  "prose-sm",
  "max-w-none",
  "prose-headings:text-wblue",
  "prose-h1:font-sser",
  "prose-h1:text-6xl",
  "prose-h1:font-extralight",
  "prose-h1:mt-24",
  "prose-h1:mx-8",
  "prose-h2:mt-16",
  "prose-h2:mb-2",
  "prose-h2:font-times",
  "prose-h2:font-light",
  "prose-p:font-times",
  "prose-p:text-ash",
  "prose-p:mx-8",
  "prose-p:mt-0",
  "prose-p:mb-0",
  "prose-a:font-helv",
  "prose-a:text-wblue",
  "prose-a:no-underline",
  "prose-a:border",
  "prose-a:border-1",
  "prose-a:border-wblue",
  "prose-a:p-2",
  "prose-a:m-8",
].join(" ");

const Home: NextPage<Props> = ({ landing, details, rsvp, gifts }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-3/4 mx-auto shadow-lg">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center ">
        <Navbar />
        <h1 id="home" className="font-sser text-6xl text-wblue mt-[4.3rem]">
          {landing.frontmatter.heading}
        </h1>
        <h5 className="font-sser text-mblue mt-2 mb-[2.4rem] tracking-widest text-xl">
          {landing.frontmatter.date}
        </h5>
        <Image src={glendirkImage} placeholder="blur" className="-z-50" />
        <div className="bg-mblue w-4/5 h-0.5 my-10" />
        <div
          className={proseStyles}
          dangerouslySetInnerHTML={{ __html: details.content }}
        />
        <a
          href=""
          className="uppercase border border-1 border-wblue text-wblue font-helv p-2 my-10 hover:bg-wblue hover:text-white"
        >
          get directions
        </a>
        <div
          className={proseStyles}
          dangerouslySetInnerHTML={{ __html: rsvp.content }}
        />
        <RsvpForm />
        <div
          className={proseStyles}
          dangerouslySetInnerHTML={{ __html: gifts.content }}
        />
      </main>
    </div>
  );
};

export default Home;
