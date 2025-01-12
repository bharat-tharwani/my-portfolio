"use client";
import { FaGit, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./magic-button";
import { FaCopy, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Lottie  from "react-lottie";
import animationData from "@/data/confetti.json";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "btharwani92@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);

    const timer = setTimeout(() => {
      setCopied(false); 
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);

  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <footer className="w-full max-h-0" id="contact">
      <div className="w-full absolute left-0 -bottom-72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="object-cover opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-white">
            Let's <span className="text-purple-500">Connect!</span>
        </h1>
        <div className="relative">
          <div
            className={`absolute -bottom-5 right-12 ${copied ? "block" : "block"
              }`}
          >
            <Lottie options={defaultOptions} height={300} width={200} isClickToPauseDisabled={true} isStopped={!copied} />
          </div>
          <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<FaCopy />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-24">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2025 Bharat Tharwani
        </p>

        <div className="flex items-center md:gap-3 gap-6">
            <div
              className="group hover:scale-125 transform duration-1000 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://github.com/bharat-tharwani" target="_"><FaGithub className="h-6 w-6 text-white" /></a>
            </div>
            <div
              className="group hover:scale-125 transform duration-1000 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://www.linkedin.com/in/btharwani92/" target="_"><FaLinkedin className="h-6 w-6 text-[#0D62BC]" /></a>
            </div>
            <div
              className="group hover:scale-125 transform duration-1000 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://www.instagram.com/bharat.png/" target="_"><FaInstagram className="h-6 w-6 text-[#AB08E5]" /></a>
            </div>
            <div
              className="group hover:scale-125 transform duration-1000 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://www.facebook.com/bunny6992" target="_"><FaFacebook className="h-6 w-6 text-[#179AF1]" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
