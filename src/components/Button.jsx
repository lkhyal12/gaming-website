import React from "react";

const Button = ({ id, title, icon, containerClass, leftIcon, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit px-7 py-3 cursor-pointer overflow-hidden rounded-full bg-violet-50 text-black ${containerClass}`}
    >
      {rightIcon && rightIcon}
      {leftIcon && leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
