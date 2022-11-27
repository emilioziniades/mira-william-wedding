import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

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
  "md:prose-xl",
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
  "prose-p:text-leaf",
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
        <title>William & Mira</title>
        <meta name="description" content={landing.frontmatter.ogMessage} />
        <meta property="og:title" content={landing.frontmatter.ogTitle} />
        <meta property="og:url" content="https://williamandmira.co.za" />
        <meta
          property="og:description"
          content={landing.frontmatter.ogMessage}
        />
        <meta
          property="og:image"
          content="https://williamandmira.co.za/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fglendirk-watercolor-icon.1a4150ca.jpeg?url=%2F_next%2Fstatic%2Fmedia%2Fglendirk-watercolor-icon.1a4150ca.jpeg&w=640&q=75"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={globalStyles}>
        <Navbar />

        <div className="bg-paper flex flex-col items-center">
          <div className="relative pb-14">
            <Image src={roses} placeholder="blur" className="z-2" priority />
            <div className="flex flex-col self-start absolute bottom-0 left-3 md:left-10">
              <h1
                id="home"
                className="font-crealen text-5xl self-start md:text-8xl"
              >
                {landing.frontmatter.heading}
              </h1>
              <h3 className="font-crealen tracking-widest text-lg md:text-3xl self-start pl-2">
                {landing.frontmatter.date}
              </h3>
            </div>
          </div>
          <VerticalLine />
          <div className="md:my-4">
            <div
              className={proseStyles}
              dangerouslySetInnerHTML={{ __html: landing.content }}
            />
          </div>
          <HorizontalLine />
        </div>
        <div className="flex flex-col items-center">
          <h1 id="details" className="font-sser text-3xl mt-5">
            {details.frontmatter.heading}
          </h1>
          <VerticalLine />
          <div className="text-md md:text-lg">
            <div>{details.frontmatter.location}</div>
            <div className="mb-6">{details.frontmatter.date}</div>
          </div>
          <HorizontalLine />
          <div className="mb-5">{details.frontmatter.dressCodeDescription}</div>
          <HorizontalLine />
          <div className="text-sm">
            <div
              className={proseStyles}
              dangerouslySetInnerHTML={{ __html: details.content }}
            />
          </div>
          <div className="mt-5 px-5 md:w-2/3 sm:w-3/4">
            <Image src={glendirkImage} placeholder="blur" />
          </div>
          <Button
            link={details.frontmatter.buttonLink!}
            name={details.frontmatter.buttonName!}
          />
          <HorizontalLine />
        </div>
        <div className="bg-paper w-full flex flex-col items-center">
          <div id="rsvp"></div>
          <div className="bg-white relative m-8 flex flex-col items-center z-10">
            <h1
              id="rsvp-fake"
              className="mt-5 font-sser font-extralight text-3xl mx-8 mb-0 uppercase"
            >
              {rsvp.frontmatter.heading}
            </h1>
            <div className="bg-paper absolute w-5 h-5 top-0 left-0 rounded-br-lg" />
            <div className="bg-paper absolute w-5 h-5 top-0 right-0 rounded-bl-lg" />
            <div className="bg-paper absolute w-5 h-5 bottom-0 left-0 rounded-tr-lg" />
            <div className="bg-paper absolute w-5 h-5 bottom-0 right-0 rounded-tl-lg" />
            <p className="font-times mx-8 my-2 leading-5">
              {rsvp.frontmatter.message}
            </p>
            <RsvpForm submissionMessage={rsvp.frontmatter.submissionMessage!} />
          </div>
          <HorizontalLine />
        </div>
        <div className="flex flex-col items-center">
          <h1
            id="registry"
            className="mt-5 font-sser font-extralight text-3xl mx-8 mb-0"
          >
            {registry.frontmatter.heading}
          </h1>
          <VerticalLine />
          <div
            className={proseStyles}
            dangerouslySetInnerHTML={{ __html: registry.content }}
          />
          <div className="flex flex-row space-x-4">
            <Button
              link={registry.frontmatter.buttonLink!}
              name={registry.frontmatter.buttonName!}
            />
            <Button
              link={registry.frontmatter.buttonLink2!}
              name={registry.frontmatter.buttonName2!}
            />
          </div>
          <div className="w-2/6">
            <Image src={rosesBottom} placeholder="blur" className="z-2" />
          </div>
        </div>
        <div className="bg-paper w-full py-5">
          <p>
            by{" "}
            <a
              href="https://emilio.co.za"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emilio
            </a>{" "}
            and Sofia
          </p>
          <p className="mt-4 text-xs">
            Roses:{" "}
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=22738450"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Hans Simon Holtzbecher
            </a>{" "}
            and{" "}
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=14953088"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Pierre-Joseph Redouté
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

const VerticalLine = () => {
  return (
    <p className="rotate-90 tracking-tighter my-7 text-rose">
      {"· · · · · · · ·"}
    </p>
  );
};

const HorizontalLine = () => {
  return <div className="bg-leaf w-1/5 h-[1px] mb-7 mt-1" />;
};

export default Home;
