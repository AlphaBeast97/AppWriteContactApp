import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-[12px] border-t p-4 text-white">
      <div>
        Made By:{" "}
        <a
          className="text-indigo-300 hover:underline transition-all"
          href="https://github.com/AlphaBeast97/AppWriteContactApp"
        >
          M. Saad Khan
        </a>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-1">
        Technologies:{" "}
        <a href="https://react.dev/">
          <img className="w-5" src="./img/react.png" alt="React" />{" "}
        </a>
        <a href="https://appwrite.io/">
          <img className="w-5" src="./img/logos_appwrite.svg" alt="Appwrite" />
        </a>
        <a href="https://tailwindcss.com/">
          <img className="w-5" src="./img/tailwind.png" alt="Tailwindcss" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img className="w-5" src="./img/javascript.png" alt="JavaScript" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
