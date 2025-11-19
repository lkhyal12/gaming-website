import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
const navLinks = ["Nexus", "Vault", "Prologue", "About", "Contact"];
const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navRef = useRef();
  const audioElementRef = useRef();

  const { y: currentScrollY } = useWindowScroll();
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavbarVisible(true);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
      navRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavbarVisible(true);
      navRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, currentScrollY]);

  useGSAP(() => {
    gsap.to(navRef.current, {
      y: isNavbarVisible ? "0" : "-100%",
      opacity: isNavbarVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavbarVisible]);
  useEffect(() => {
    const str = isAudioPlaying ? "play" : "pause";
    audioElementRef.current[str]();
  }, [isAudioPlaying]);
  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-5 h-16 z-50 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50  hidden md:flex items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navLinks.map((item) => (
                <a
                  key={item}
                  className="nav-hover-btn"
                  href={"#" + item.toLowerCase()}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5 cursor-pointer"
              onClick={toggleAudioIndicator}
            >
              <audio
                src="/audio/loop.mp3"
                className="hidden"
                ref={audioElementRef}
                loop
              ></audio>

              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
