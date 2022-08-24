import { FC } from "react";

import { makeString } from "../lib/styling";

export const buttonStyles = makeString([
  "uppercase",
  "border",
  "border-1",
  "border-rose",
  "text-rose",
  "font-helv",
  "p-2",
  "my-12",
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
