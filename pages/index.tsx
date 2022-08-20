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
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: landing.content }}
        />
        <Image src={glendirkImage} placeholder="blur" className="-z-50" />
        <p> straight line border here </p>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: details.content }}
        />
        <div
          className="prose prose-p:font-times prose-headings:font-helv prose-p:font-bold"
          dangerouslySetInnerHTML={{ __html: accommodation.content }}
        />
        <div
          className="prose prose-p:font-helv prose-headings:font-helv"
          dangerouslySetInnerHTML={{ __html: accommodation.content }}
        />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: rsvp.content }}
        />
        <RsvpForm />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: gifts.content }}
        />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
