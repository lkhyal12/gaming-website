import React from "react";
import Button from "./Button";

function ImageClipBox({ src, clipClass }) {
  return (
    <div className={clipClass}>
      <img src={src} alt="" />
    </div>
  );
}
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 ">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
          />

          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
          />

          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">join zentry</p>

          <p className="font-general mt-10 w-full text-4xl md:text-[6rem] leading-[0.9] uppercase md:w-2/3 text-center">
            let's build a new era of gaming together
          </p>
          <Button
            title="Contact Us"
            containerClass="mt-10 cursor-pointer font-semibold font-general"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
