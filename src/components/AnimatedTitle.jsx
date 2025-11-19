import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimationTM = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      });

      titleAnimationTM.to(".animated-word", {
        transform: "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
        opacity: 1,
      });
    }, containerRef.current);
    return () => ctx.revert();
  }, []);
  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;

// import React from "react";

// const AnimatedTitle = () => {
//   return <div></div>;
// };

// export default AnimatedTitle;
