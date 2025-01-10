import React from 'react'
import { Button } from './ui/moving-borders'
import { FaCss3, FaCss3Alt, FaDatabase, FaFacebook, FaGitSquare, FaGithub, FaHtml5, FaJava, FaJs, FaJsfiddle, FaLaravel, FaPhp, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import { companies } from "@/data";
import { FaN, FaT } from 'react-icons/fa6';

const TechStack = () => {
  return (
    <div>
        <div className='text-white text-7xl text-center m-10' id='about'>My Tech 
            <span className='text-purple-500'> Stack</span>
        </div>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            // style={{
            //   //   add these two
            //   //   you can generate the color from here https://cssgradient.io/
            //   background: "rgb(4,7,29)",
            //   backgroundColor:
            //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            //   // add this border radius to make it more rounded so that the moving border is more realistic
            //   borderRadius: `calc(1.75rem* 0.96)`,
            // }}
            
            className="text-white border-slate-800 bg-gradient-to-r from-slate-850 to-slate-950"
          >
                
                <div className='flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-10'>
                    <div className='text-5xl'>Frontend</div>
                    <div className="flex flex-rows gap-3 md:gap-3 lg:gap-8 flex-wrap items-center justify-center">
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaHtml5 className='text-3xl text-blue-800 text-center' />
                            <span>HTML</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaCss3 className='text-3xl text-blue-800 text-center' />
                            <span>CSS</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaT className='text-3xl text-blue-800 text-center' />
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaJs className='text-3xl text-blue-800 text-center' />
                            <span>JavaScript</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaJsfiddle className='text-3xl text-blue-800 text-center' />
                            <span>TypeScript</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaJsfiddle className='text-3xl text-blue-800 text-center' />
                            <span>jQuery</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaVuejs className='text-3xl text-blue-800 text-center' />
                            <span>Vue.js</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaReact className='text-3xl text-blue-800 text-center' />
                            <span>React</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaN className='text-3xl text-blue-800 text-center' />
                            <span>Next.js</span>
                        </div>
                    </div>
                </div>
      
        </Button>
        <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            // style={{
            //   //   add these two
            //   //   you can generate the color from here https://cssgradient.io/
            //   background: "rgb(4,7,29)",
            //   backgroundColor:
            //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            //   // add this border radius to make it more rounded so that the moving border is more realistic
            //   borderRadius: `calc(1.75rem* 0.96)`,
            // }}
            
            className="text-white border-slate-800 bg-gradient-to-r from-slate-850 to-slate-950"
          >
                
                <div className='flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-10'>
                    <div className='text-5xl'>Backend</div>
                    <div className="flex flex-rows gap-3 md:gap-3 lg:gap-8 flex-wrap items-center justify-center">
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaPhp className='text-3xl text-blue-800 text-center' />
                            <span>PHP</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaJava className='text-3xl text-blue-800 text-center' />
                            <span>Java</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaPython className='text-3xl text-blue-800 text-center' />
                            <span>Python</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaLaravel className='text-3xl text-blue-800 text-center' />
                            <span>Laravel</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaJava className='text-3xl text-blue-800 text-center' />
                            <span>Spring Boot</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaDatabase className='text-3xl text-blue-800 text-center' />
                            <span>PostgreSQL</span>
                        </div>
                        <div className="w-36 flex flex-col gap-2 py-3 px-6 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg justify-center items-center text-center bg-[#10132E] hover:scale-125 transform duration-1000">
                            <FaDatabase className='text-3xl text-blue-800 text-center' />
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>
        </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 my-16">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                {company.id != 4 && (
                    <img
                    src={company.img}
                    alt={company.name}
                    className={company.id === 1 ? "bg-white w-24 h-10 rounded-md" : "md:w-10 w-5"}
                  />
                )}

                {company.id == 4 && (
                    <FaGithub className='text-white text-5xl'/>
                )}
                
                {company.id !== 1 && company.id !== 2 && company.id !== 4 && ( // Skip the second image if id === 1
                <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                />
                )}
                {company.id === 2 && (
                    <span className='text-white mt-1 font-sans text-lg font-semibold'>VS Code</span>
                )}
                
                {company.id === 4 && (
                    <span className='text-white mt-3 font-sans text-xl font-semibold tracking-wide'>GitHub</span>
                )}
                
              </div>
            </React.Fragment>
          ))}
        </div>
    </div>
  )
}

export default TechStack