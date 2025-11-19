import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-300 text-black py-4 w-screen">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Nove 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
