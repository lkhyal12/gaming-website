import React, { useRef, useState } from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

function BentoTilt({ children, className = "" }) {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  function handleMouseMove(e) {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;
    setTransformStyle(newTransform);
  }
  function handleMouseLeave() {
    setTransformStyle("");
  }
  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}
const Features = () => {
  return (
    <section className="pb-52 bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-general text-lg text-blue-50">
            Into the Metagame layer
          </p>

          <p className="text-blue-50 opacity-50 max-w-md text-lg font-general">
            Immerse yourself i a rich and ever-expanding universe when a vibrant
            array of products converge into an interconnected overlay experience
            on your world
          </p>

          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              title={
                <>
                  radi<b>n</b>t
                </>
              }
              src="videos/feature-1.mp4"
              description="A cross-platform metagame app, Turning your activities across Web2 and Web3 Games into a rewarding adventure."
            />
          </BentoTilt>
          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                title={
                  <>
                    zig<b>m</b>a
                  </>
                }
                src="videos/feature-2.mp4"
                description="An anime and gaming-inspierd NFT collection - the IP primed for expansion"
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
              <BentoCard
                title={
                  <>
                    n<b>e</b>xus
                  </>
                }
                src="/videos/feature-3.mp4"
                description="A gamified social hub, adding a new dimmention of play to social interaction for Web3 communities."
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0">
              <BentoCard
                title={
                  <>
                    az<b>u</b>l
                  </>
                }
                src="/videos/feature-4.mp4"
                description="A cross-world AI agent - elevating your gameplay to be more fun and productive"
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_2 ">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="font-general bento-title max-w-64 ">
                  More coming soon!
                </h1>
                <TiLocationArrow className="scale-[5] m-5 self-end" />
              </div>
            </BentoTilt>

            <BentoTilt className="bento-tilt_2">
              <video
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-center object-cover"
              ></video>
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
