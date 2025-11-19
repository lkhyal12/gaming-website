import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const ref = useRef();
  useGSAP(
    () => {
      const clipPath = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacer: true,
        },
      });

      clipPath.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    },

    { scope: ref }
  );
  return (
    <div
      ref={ref}
      id="about"
      className="  min-h-screen w-screen overflow-y-scroll overflow-x-hidden"
    >
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] ">
          Welcome To Zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br />l<b>a</b>rgest shared adventure"
          containerClass={"!text-black text-center mt-5 mb-30"}
        />

        <div className="absolute top-[130vh]    text-center font-general text-lg max-w-96 md:max-w-136 ">
          <p>The Game of Games begins-your life now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
