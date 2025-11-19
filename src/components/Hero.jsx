import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef();
  const videoIndex = (currentIndex % totalVideos) + 1;

  function handleMiniVideoClick() {
    setHasClicked(true);
    setCurrentIndex(videoIndex);
  }
  const getVideoSrc = (idx) => `videos/hero-${idx}.mp4`;

  function handleVideoLoad() {
    setLoadedVideos((prev) => prev + 1);
    console.log(loadedVideos);
  }

  // usegsap functionality
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%,72% 0,90% 90%,0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%,100% 0,100% 100%,0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  useEffect(() => {
    console.log({ loadedVideos });

    if (loadedVideos === totalVideos - 1) setIsloading(false);
  }, [loadedVideos]);

  return (
    <div className="h-dvh w-screen relative overflow-x-hidden">
      {isLoading && (
        <div className="flex-center  absolute z-100 bg-violet-50 overflow-hidden h-dvh w-screen">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-50 rounded-lg overflow-hidden cursor-pointer">
            <div
              className="origin-center scale-50 opacity-0 transiton-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVideoClick}
            >
              <video
                src={getVideoSrc(videoIndex)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center object-cover object-center scale-150"
                onLoadedData={() => handleVideoLoad()}
              ></video>
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            id="next-video"
            className="absolute invisible absolute-center size-64  z-20 object-cover object-center "
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 size-full
          object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="font-general hero-heading absolute bottom-5 right-5 z-40 text-blue-75 text-lg">
          G<b>a</b>MING
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="hero-heading text-blue-100 font-general ">
              redifi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the metagame layer <br />
              Unleash the play economy
            </p>
            <Button
              title="Watch Trailer"
              id="watch-triler"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="font-general hero-heading absolute bottom-5 right-5  text-black text-lg">
        G<b>a</b>MING
      </h1>
    </div>
  );
};

export default Hero;
