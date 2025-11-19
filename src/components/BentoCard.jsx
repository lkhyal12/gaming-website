import React from "react";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0  size-full object-cover object-center"
      />
      <div className="relative size-full z-10 flex flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title text-general">{title}</h1>
          {description && (
            <p className="mt-3 maw-w-64 text-xs">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
