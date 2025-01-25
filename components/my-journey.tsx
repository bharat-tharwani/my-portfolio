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
          <h1 className="text-purple-200 text-2xl mb-2">
            Master's in Computer Science & Worked as a Teaching Assistant
          </h1>
          <p className="text-neutral-200 text-md md:text-lg font-normal mb-4">
            <FaCheck className="inline mr-1 text-purple-400" /> Completed
            Master's degree in Computer Science from SUNY, New Paltz <br />
            <FaCheck className="inline mr-1 text-purple-400" /> Worked as a
            Teaching Assistant for a year, where I mentored undergraduate
            students, graded assignments, and facilitated discussions to help
            them understand complex programming concepts. <br />
            <FaCheck className="inline mr-1 text-purple-400" /> Built a deep
            learning model to predict stock price movements. <br />
            <FaCheck className="inline mr-1 text-purple-400" /> Improved my
            coding skills using platforms like LeetCode, solving diverse
            problems to strengthen my problem-solving abilities. <br />
          </p>
          <div className="mb-4 flex gap-4 flex-wrap">
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Java
            </div>
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              DSA
            </div>
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Python
            </div>
            <div className="min-w-40 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Machine Learning
            </div>
            <div className="min-w-36 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Deep Learning
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              JavaScript
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Node.js
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Express.js
            </div>
          </div>
          <div className="mt-8">
            <Image
              src="/newpaltz.jpg"
              alt="startup template"
              width={500}
              height={500}
              unoptimized
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
          <h1 className="text-purple-200 text-2xl mb-2">
            Senior Full Stack Developer at Webspace Studio Pvt. Ltd.
          </h1>
          <p className="text-neutral-200 text-md md:text-lg font-normal mb-4">
            <FaCheck className="inline mr-1 text-purple-500" /> Led a team of 4
            web developers, mentoring them to improve their skills and ensuring
            the successful delivery of projects.
            <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Managed and
            executed deployments to AWS servers, ensuring seamless application
            updates and maintaining optimal server performance.
            <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Developed a job
            portal using Spring Boot and React, combining features of Indeed and
            Freelancer to enable job postings, applications, and freelance
            project management on a unified platform. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Designed and
            developed over 30 APIs and integrated them into the frontend using
            React, ensuring smooth and efficient communication between the
            client and server.
            <br />
          </p>
          <div className="mb-4 flex gap-4 flex-wrap">
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Java
            </div>
            <div className="min-w-28 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Spring Boot
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              JavaScript
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              React
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Vue.js
            </div>
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              PHP
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              MySQL
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Laravel
            </div>
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              AWS
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h1 className="text-purple-200 text-2xl mb-2">
            Founder and Web Developer at Misfit Style
          </h1>
          <p className="text-neutral-200 text-md md:text-lg font-normal mb-4">
            <FaCheck className="inline mr-1 text-purple-500" /> Designed and
            developed an e-commerce clothing website using Spring Boot, MySQL,
            and React. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Integrated
            Razorpay payment gateway for seamless and secure payment processing.{" "}
            <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Automated order
            management workflows with shipping providers to streamline
            operations. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Deployed the
            application on DigitalOcean Droplets with load balancers to handle
            high traffic and ensure scalability. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Built invoice
            and inventory management software to manage both store and web
            inventory from a centralized platform. <br />
          </p>
          <div className="mb-4 flex gap-4 flex-wrap">
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Java
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              MySQL
            </div>
            <div className="min-w-28 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Spring Boot
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              JavaScript
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              React
            </div>
            <div className="min-w-32 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Digital Ocean
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src="/misfit_1.jpg"
              alt="startup template"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/misfit_3.jpg"
              alt="startup template"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017 - 2019",
      content: (
        <div>
          <h1 className="text-purple-200 text-2xl mb-2">
            Software Developer at Ranium Systems Pvt. Ltd.
          </h1>
          <p className="text-neutral-200 text-md md:text-lg font-normal mb-4">
            <FaCheck className="inline mr-1 text-purple-500" /> Led bug fixing
            and feature development for multiple clients, with a major project
            for Eve Sleep, an online mattress company. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Developed and
            implemented a custom delivery time slot feature, allowing customers
            to select a specific delivery window based on their availability and
            convenience. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Resolved an
            average of 15 monthly client-reported bugs, ensuring smooth
            functionality and providing comprehensive support. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Collaborated
            effectively with the team using Jira for project management, task
            tracking, and sprint planning. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Worked closely
            with clients to ensure timely delivery of bug fixes and new
            features, improving site performance and user satisfaction. <br />
          </p>
          <div className="mb-4 flex gap-4 flex-wrap">
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              PHP
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              MySQL
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Laravel
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              JavaScript
            </div>
            <div className="min-w-40 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Adobe Commerce
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              Vue.js
            </div>
            <div className="w-16 min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              AWS
            </div>
          </div>
          <div className="mt-8">
            <Image
              src="/ranium.png"
              alt="startup template"
              width={500}
              height={500}
              unoptimized
              className="rounded-lg object-cover h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015 - 2017",
      content: (
        <div>
          <h1 className="text-purple-200 text-2xl mb-2">
            Web Developer at CodeFactree Pvt. Ltd.
          </h1>
          <p className="mb-4 text-neutral-200 text-md md:text-lg font-normal">
            <FaCheck className="inline mr-1 text-purple-500" /> Using
            CodeIgniter, MySQL and Javascript, designed and developed custom
            platforms for 4 vendors to manage their inventory, customers,
            orders, invoicing, and debt tracking in one place. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Integrated
            features to track both expired products and low stock items, helping
            vendors stay on top of inventory and reduce waste. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Built a platform
            for a salon to manage inventory, invoicing, and payroll
            <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Developed a
            custom commission algorithm to calculate employee commissions based
            on the services provided and the quality of work.
            <br />
          </p>
          <div className="mb-4 flex gap-4 flex-wrap items-start justify-start">
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              JavaScript
            </div>
            <div className="min-w-24 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              jQuery
            </div>
            <div className="min-w-16 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              PHP
            </div>
            <div className="min-w-20 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              MySQL
            </div>
            <div className="min-w-28 text-center text-purple-500 rounded-lg border border-slate-500 p-1">
              CodeIgniter
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <h1 className="text-purple-200 text-2xl mb-2">
            Completed My Undergraduate degree in Electronics from YCCE at
            Nagpur, India{" "}
          </h1>
          <p className="text-neutral-200 text-md md:text-lg font-normal mb-8">
            <FaCheck className="inline mr-1 text-purple-500" /> Completed
            Master's degree in Computer Science from SUNY, New Paltz <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Worked as a
            Teaching Assistant for a year, where I mentored undergraduate
            students, graded assignments, and facilitated discussions to help
            them understand complex programming concepts. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Built a deep
            learning model to predict stock price movements. <br />
            <FaCheck className="inline mr-1 text-purple-500" /> Improved my
            coding skills using platforms like LeetCode, solving diverse
            problems to strengthen my problem-solving abilities. <br />
          </p>
          <div>
            <Image
              src="/undergraduate.png"
              alt="startup template"
              width={500}
              height={500}
              unoptimized
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
