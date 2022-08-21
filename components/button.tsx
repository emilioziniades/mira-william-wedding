import { FC } from "react";

import { makeString } from "../lib/styling";

export const buttonStyles = makeString([
  "uppercase",
  "border",
  "border-1",
  "border-wblue",
  "text-wblue",
  "font-helv",
  "p-2",
  "my-12",
  "hover:bg-wblue",
  "hover:text-white",
]);

interface BtnProps {
  link: string;
  name: string;
}

const Button: FC<BtnProps> = ({ link, name }) => {
  return (
    <a href={link} className={buttonStyles}>
      {name}
    </a>
  );
};

export default Button;
