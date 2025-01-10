import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaCheck } from "react-icons/fa";

export function MyJourney() {
  const data = [
    {
      title: "2023 - 2024",
      content: (
        <div>
        	<h1 className="text-purple-200 text-2xl mb-2">Master's in Computer Science & Worked as a Teaching Assistant</h1>
          <p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
            <FaCheck className="inline mr-1 text-purple-400" /> Completed Master's degree in Computer Science from SUNY, New Paltz <br />
            <FaCheck className="inline mr-1 text-purple-400" /> Worked as a Teaching Assistant for a year, where I mentored undergraduate students, graded assignments, 
            and facilitated discussions to help them understand complex programming concepts. <br />
            <FaCheck className="inline mr-1 text-purple-400" /> Built a deep learning model to predict stock price movements. <br />
            <FaCheck className="inline mr-1 text-purple-400" /> Improved my coding skills using platforms like LeetCode, solving diverse problems to strengthen my problem-solving abilities. <br />
          </p>
          <div>
            <Image
              src="/newpaltz.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2022",
      content: (
        <div>
            <h1 className="text-purple-200 text-2xl mb-2">Worked as a Full Stack Developer at Webspace Studio Pvt. Ltd.</h1>
            <p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
            <FaCheck className="inline mr-1 text-lime-400" /> Completed Master's degree in Computer Science from SUNY, New Paltz <br />
            <FaCheck className="inline mr-1 text-lime-400" /> Worked as a Teaching Assistant for a year, where I mentored undergraduate students, graded assignments, 
            and facilitated discussions to help them understand complex programming concepts. <br />
            <FaCheck className="inline mr-1 text-lime-400" /> Built a deep learning model to predict stock price movements. <br />
            <FaCheck className="inline mr-1 text-lime-400" /> Improved my coding skills using platforms like LeetCode, solving diverse problems to strengthen my problem-solving abilities. <br />
          </p>
        </div>
      ),
    },
    {
        title: "2020",
        content: (
          <div>
              <h1 className="text-purple-200 text-2xl mb-2">Founder and Web Developer at Misfit Style</h1>
              <p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
              <FaCheck className="inline mr-1 text-lime-400" /> Completed Master's degree in Computer Science from SUNY, New Paltz <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Worked as a Teaching Assistant for a year, where I mentored undergraduate students, graded assignments, 
              and facilitated discussions to help them understand complex programming concepts. <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Built a deep learning model to predict stock price movements. <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Improved my coding skills using platforms like LeetCode, solving diverse problems to strengthen my problem-solving abilities. <br />
            </p>
          </div>
        ),
    },
    {
        title: "2017 - 2019",
        content: (
          <div>
              <h1 className="text-purple-200 text-2xl mb-2">Worked as a Software Developer at Ranium Systems Pvt. Ltd.</h1>
              <p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
              <FaCheck className="inline mr-1 text-lime-400" /> Completed Master's degree in Computer Science from SUNY, New Paltz <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Worked as a Teaching Assistant for a year, where I mentored undergraduate students, graded assignments, 
              and facilitated discussions to help them understand complex programming concepts. <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Built a deep learning model to predict stock price movements. <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Improved my coding skills using platforms like LeetCode, solving diverse problems to strengthen my problem-solving abilities. <br />
            </p>
          </div>
        ),
    },
    {
        title: "2015 - 2017",
        content: (
          <div>
              <h1 className="text-purple-200 text-2xl mb-2">Worked as a Web Developer at CodeFactree Pvt. Ltd.</h1>
              <p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
              <FaCheck className="inline mr-1 text-lime-400" /> Completed Master's degree in Computer Science from SUNY, New Paltz <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Worked as a Teaching Assistant for a year, where I mentored undergraduate students, graded assignments, 
              and facilitated discussions to help them understand complex programming concepts. <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Built a deep learning model to predict stock price movements. <br />
              <FaCheck className="inline mr-1 text-lime-400" /> Improved my coding skills using platforms like LeetCode, solving diverse problems to strengthen my problem-solving abilities. <br />
            </p>
          </div>
        ),
    },
		{
			title: "2014",
			content: (
				<div>
						<h1 className="text-purple-200 text-2xl mb-2">Completed My Undergraduate degree in Electronics from YCCE at Nagpur, India </h1>
						<p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
						<FaCheck className="inline mr-1 text-lime-400" /> Completed Master's degree in Computer Science from SUNY, New Paltz <br />
						<FaCheck className="inline mr-1 text-lime-400" /> Worked as a Teaching Assistant for a year, where I mentored undergraduate students, graded assignments, 
						and facilitated discussions to help them understand complex programming concepts. <br />
						<FaCheck className="inline mr-1 text-lime-400" /> Built a deep learning model to predict stock price movements. <br />
						<FaCheck className="inline mr-1 text-lime-400" /> Improved my coding skills using platforms like LeetCode, solving diverse problems to strengthen my problem-solving abilities. <br />
					</p>
					<div>
            <Image
              src="/undergraduate.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover opacity-70 h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
				</div>
			),
	},
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}