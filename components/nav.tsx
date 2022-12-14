import React, { FC } from "react";

const Navbar: FC = () => {
  const navs = ["home", "details", "rsvp", "registry"];

  const handleClick = (event: any) => {
    event.preventDefault();
    const headingID = event.target.href.split("#")[1];
    if (headingID == "home") {
      window.scrollTo(0, 0);
    }
    const elem = document.getElementById(headingID);
    const nav = document.getElementById("nav-bar");
    if (nav && elem) {
      window.scrollTo(
        elem.offsetLeft,
        elem.offsetTop - (nav.offsetHeight + 10)
      );
    }
  };

  return (
    <nav
      className="active sticky top-0 bg-white w-screen p-4 shadow-lg flex flex-row justify-around md:justify-center z-20"
      id="nav-bar"
    >
      {navs.map((name) => (
        <a
          href={`#${name}`}
          onClick={handleClick}
          className="uppercase font-normal font-avenir text-vine hover:text-leaf md:mx-16"
          key={name}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
