import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/hero.svg"
import LayoutEffect from "@/components/LayoutEffect"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 mt-[-50px] container ">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-6xl mx-auto text-center">
                        <h1 className="  text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                           <span className="leading-normal font-mochiy"><span className="text-[#16f2b3] text-[35px] md:text-[80px] lg:text-[80px]">LinktoSync<span className=" text-[#e15555] ">.com</span> </span>is  a service that allows user to connect and post on their social media accounts from a Single Platform.</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-300 font-roboto">
                        This kind of service typically enables users to post content across multiple social media platforms simultaneously, schedule posts, and possibly analyze engagement metrics, all from one interface.
                        </p>
                        {/* <div className="flex justify-center font-medium text-sm">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div> */}
                    </div>
                    <GradientWrapper className="mt-16 sm:mt-28 flex justify-center" wrapperClassName="max-w-9xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[350px]">
                        {/* <Image
                            src={HeroImg}
                            className="shadow-lg rounded-2xl"
                            alt="Mailgo"
                        /> */}
                        <div className=" flex justify-center mt-[-120px] font-roboto ">
                        <span className="font-bold text-white text-[80px] mt-[70px] mb-[70px] leading-[90px] animate-pulse uppercase lg:block lg:font-bold lg:text-white 2xl:text-[230px] xl:text-[160px]  lg:whitespace-nowrap lg:animate-pulse lg:uppercase">Coming soon<span className=" text-[#e15555]">...</span></span>
                        </div>
                        
                    </GradientWrapper>
                    
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero