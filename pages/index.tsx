import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RsvpForm from "../components/rsvpForm";

import { getMarkdownData } from "../lib/markdown";

export async function getStaticProps() {
  const mdData = await getMarkdownData("info");
  const data = { ...mdData };
  return {
    props: { data: data },
  };
}

const Home: NextPage = ({ data }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Mira and William Wedding</h1>
        <div className="my-6" />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
        <RsvpForm />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
