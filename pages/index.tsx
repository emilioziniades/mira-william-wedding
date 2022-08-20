import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import RsvpForm from "../components/rsvpForm";

import { getMarkdownData } from "../lib/markdown";
import type { Data } from "../lib/markdown";

export const getStaticProps: GetStaticProps = async () => {
  const mdData = await getMarkdownData("info");
  return { props: mdData };
};

const Home: NextPage<Data> = ({ content, frontmatter }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        <RsvpForm />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
