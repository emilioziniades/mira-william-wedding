import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navs = ["home", "details", "accommodation", "rsvp", "registry"];
  return (
    <nav
      className={`active sticky top-0 bg-slate-300 w-screen p-4 ${
        show && "hidden"
      }`}
    >
      {navs.map((name) => (
        <a
          href={`#${name}`}
          className="m-2 uppercase font-bold underline"
          key={name}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
