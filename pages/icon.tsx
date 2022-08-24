import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";

import paintingIcon from "../public/glendirk-watercolor-icon.jpeg";

const Icon: NextPage = () => {
  return <Image src={paintingIcon} placeholder="blur" className="z-2" />;
};

export default Icon;
