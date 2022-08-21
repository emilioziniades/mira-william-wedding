import React, { useState, useEffect, FC } from "react";

const Navbar: FC = () => {
  const navs = ["home", "details", "rsvp", "registry"];

  const handleClick = (event) => {
    event.preventDefault();
    const elem = document.getElementById(event.target.innerHTML);
    const nav = document.getElementById("nav-bar");
    window.scrollTo(elem.offsetLeft, elem.offsetTop - (nav.offsetHeight + 10));
  };

  return (
    <nav
      className="active sticky top-0 bg-white w-screen p-4 shadow-lg"
      id="nav-bar"
    >
      {navs.map((name) => (
        <a
          href={`#${name}`}
          onClick={handleClick}
          className="m-2 uppercase font-bold font-helv text-mblue hover:text-wblue"
          key={name}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
