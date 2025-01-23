import React from "react";
import { Button } from "./ui/moving-borders";
import {
  FaCss3,
  FaCss3Alt,
  FaDatabase,
  FaFacebook,
  FaFire,
  FaGitSquare,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaJsfiddle,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { companies } from "@/data";
import { FaN, FaT } from "react-icons/fa6";

const TechStack = () => {
  return (
    <div>
      <div
        className="text-white text-4xl lg:text-5xl text-center mt-10"
        id="about"
      >
        My Tech
        <span className="text-purple-500"> Stack</span>
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-6">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="text-white border-slate-800 bg-gradient-to-r from-slate-850 to-slate-950"
        >
          <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-10">
            <div className="text-3xl lg:text-4xl">Frontend</div>
            <div className="flex flex-rows gap-3 md:gap-3 lg:gap-8 flex-wrap items-center justify-center">
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaHtml5 className="text-3xl text-[#DD4A25] text-center" />
                <span>HTML</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaCss3 className="text-3xl text-[#244BDE] text-center" />
                <span>CSS</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                {/* <FaT className='text-3xl text-[#37BCF8] text-center' /> */}
                <img src="/tailwind.svg" className="w-8" />
                <span>Tailwind CSS</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaJs className="text-3xl text-[#EFD81A] text-center" />
                <span>JavaScript</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                {/* <FaJsfiddle className='text-3xl text-[#2F73BF] text-center' /> */}
                <img src="/typescript.svg" className="w-8" />
                <span>TypeScript</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                {/* <FaJsfiddle className='text-3xl text-[#2F73BF] text-center' /> */}
                <img src="/jquery.svg" className="w-8" />
                <span>jQuery</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaVuejs className="text-3xl text-[#3EB27F] text-center" />
                <span>Vue.js</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaReact className="text-3xl text-[#47CEF6] text-center" />
                <span>React</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaN className="text-3xl text-[#F7F7F7] text-center" />
                <span>Next.js</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <img src="/redux.svg" className="w-8" />
                <span>Redux</span>
              </div>
            </div>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="text-white border-slate-800 bg-gradient-to-r from-slate-850 to-slate-950"
        >
          <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-10">
            <div className="text-3xl lg:text-4xl">Backend</div>
            <div className="flex flex-rows gap-3 md:gap-3 lg:gap-8 flex-wrap items-center justify-center">
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <img src="/java.svg" className="w-8" />
                <span>Java</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaPython className="text-3xl text-[#F6C638] text-center" />
                <span>Python</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaPhp className="text-5xl text-[#4B588F] text-center" />
                <span>PHP</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <img src="/springboot.svg" className="w-8" />
                <span>Spring Boot</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaNodeJs className="text-3xl text-[#7BB163] text-center" />
                <span>Node.js</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaLaravel className="text-3xl text-[#F54C3A] text-center" />
                <span>Laravel</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <FaFire className="text-3xl text-[#F54C3A] text-center" />
                <span>CodeIgniter</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                {/* <FaDatabase className='text-3xl text-[#3F779C] text-center' /> */}
                <img src="/postgresql.svg" className="w-8" />
                <span>PostgreSQL</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                {/* <FaDatabase className='text-3xl text-[#035D85] text-center' /> */}
                <img src="/mysql.svg" className="w-8" />
                <span>MySQL</span>
              </div>
              <div
                className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000"
              >
                <img src="/supabase.png" className="w-8" />
                <span>Supabase</span>
              </div>
            </div>
          </div>
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 my-16">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-6">
              {company.id != 4 && (
                <img
                  src={company.img}
                  alt={company.name}
                  className={
                    company.id === 1
                      ? "bg-white w-24 h-10 rounded-md"
                      : "md:w-10 w-5"
                  }
                />
              )}

              {company.id == 4 && <FaGithub className="text-white text-5xl" />}

              {company.id !== 1 &&
                company.id !== 2 &&
                company.id !== 4 && ( // Skip the second image if id === 1
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                  />
                )}
              {company.id === 2 && (
                <span className="text-white mt-1 font-sans text-lg font-semibold">
                  VS Code
                </span>
              )}

              {company.id === 4 && (
                <span className="text-white mt-3 font-sans text-xl font-semibold tracking-wide">
                  GitHub
                </span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
