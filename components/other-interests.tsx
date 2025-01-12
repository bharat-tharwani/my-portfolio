"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-cards";

const OtherInterests = () => {
  return (
    <section id="beyond" className="py-20">
      <h1 className="heading text-5xl text-white text-center">
        Things Beside
        <span className="text-purple-500"> Development</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            direction="left"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
};

export default OtherInterests;
