import { FC } from "react";

import { makeString } from "../lib/styling";

export const buttonStyles = makeString([
  "uppercase",
  "border",
  "border-1",
  "border-rose",
  "bg-rose",
  "text-paper",
  "font-avenir",
  "font-normal",
  "text-sm",
  "px-4",
  "py-1",
  "my-12",
  "rounded-md",
  "hover:bg-rose",
  "hover:text-paper",
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
