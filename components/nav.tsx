import React, { useState, useEffect, FC } from "react";

const Navbar: FC = () => {
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

  const navs = ["home", "details", "rsvp", "registry"];
  return (
    <nav
      className={`active sticky top-0 bg-white w-screen p-4 shadow-lg ${
        show && "hidden"
      }`}
    >
      {navs.map((name) => (
        <a
          href={`#${name}`}
          onClick={(event) => {
            event.preventDefault();
            const elem = document.getElementById(event.target.innerHTML);
            console.log(elem);
            window.scrollTo(elem.offsetLeft, elem.offsetTop);
            setShow(false);
            setLastScrollY(window.scrollY);
          }}
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
