import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './magic-button'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
		<div className='' id='home'>
			<div>
				<Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
				<Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
				<Spotlight className="h-[80vh] w-[50vw] left-[50%]" fill="white"/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>
			
			<div className=''>
				<BackgroundBeamsWithCollision>
				<div className="flex flex-col justify-center items-center my-20 z-10 gap-5">
					<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-2 items-center justify-center">
						<p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-100">
							Bugs Fear Me, Deadlines Love Me!
						</p>
						<TextGenerateEffect
							words="Hey, I am Bharat!"
							className="text-center text-[40px] md:text-5xl lg:text-7xl tracking-widest"
							duration={5}
						/>

						<p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
							A Full Stack Web Developer.
						</p>
						{/* <a href="#about" className=''>
							<MagicButton
							title="Show my work"
							icon={<FaLocationArrow />}
							position="right"
							/>
						</a> */}
					</div>
					<div className=''>
						<a href="#about" className=''>
							<MagicButton
							title="Show my work"
							icon={<FaLocationArrow />}
							position="right"
							/>
						</a>
					</div>
      			</div>
				</BackgroundBeamsWithCollision>
			</div>

			
		</div>
  )
}

export default Hero