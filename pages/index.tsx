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
  const accommodation = await getMarkdownData("accommodation");
  const rsvp = await getMarkdownData("rsvp");
  const gifts = await getMarkdownData("gifts");
  return { props: { landing, details, accommodation, rsvp, gifts } };
};

const proseStyles =
  "prose prose-h1:font-sser prose-h1:font-light prose-h1:text-4xl prose-p:font-times prose-h2:font-times prose-a:font-helv";

const Home: NextPage<Props> = ({
  landing,
  details,
  accommodation,
  rsvp,
  gifts,
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <Navbar />
        <h1 id="home" className="font-sser text-6xl">
          {landing.frontmatter.heading}
        </h1>
        <h5 className="font-helv">{landing.frontmatter.date}</h5>
        <Image src={glendirkImage} placeholder="blur" className="-z-50" />
        <div
          className={proseStyles}
          dangerouslySetInnerHTML={{ __html: details.content }}
        />
        <div
          className={proseStyles}
          dangerouslySetInnerHTML={{ __html: accommodation.content }}
        />
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
