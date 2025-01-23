import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./magic-button";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="h-[80vh] w-[50vw] left-[50%]" fill="white" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col justify-center items-center my-20 z-10 gap-5">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-2 items-center justify-center">
              <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-100">
                I <span className="text-purple-400">instruct</span> machines to
                build <span className="text-purple-400">beautiful</span> things-
                like this <span className="text-purple-400">one</span>
              </p>
              <TextGenerateEffect
                words="Hey, I am Bharat!"
                className="text-center text-[40px] md:text-5xl lg:text-7xl tracking-widest"
                duration={5}
              />

              <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
                A Full Stack
                <span className="text-purple-400"> Web </span>Developer.
              </p>
              {/* <a href="#about" className=''>
							<MagicButton
							title="Show my work"
							icon={<FaLocationArrow />}
							position="right"
							/>
						</a> */}
            </div>
            <div className="group">
              <a href="./sample.pdf" className="" target="_blank">
                <MagicButton
                  title="Get My Resume"
                  icon={
                    <FaSquareArrowUpRight className="text-lg group-hover:scale-150 transform duration-1000" />
                  }
                  position="right"
                />
              </a>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
};

export default Hero;
