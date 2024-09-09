import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/Prasanth1.jpeg"
import user2 from "@/public/testimonial/nivi.jpeg"
import user3 from "@/public/testimonial/Sreeja.jpeg"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "PRASANTH .K",
            title: "Founder",
            quote: "Knowledge is power. But it's not just the knowledge itself, it's what you do with it that truly matters. Empower people with the right knowledge and tools, and they'll achieve incredible feats.",
            profile :"https://www.linkedin.com/in/followprasanth/"
        },
        {
            avatar: user2,
            name: "NIVASIKA .A",
            title: "Co-Founder",
            quote: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
            profile :"https://www.linkedin.com/in/nivasika-arivazhagan/"
        },
        {
            avatar: user3,
            name: "SREEJA .K",
            title: "Co-Founder",
            quote: "Innovation thrives on belief. Trust in the inherent goodness and intelligence of people, and with the right support, they'll turn possibilities into remarkable realities.",
            profile :"https://www.linkedin.com/in/sreejakrishnamoorthy/"
        }
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-300 mt-[-240px] ">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl font-roboto">
                        OUR INCREDIBLE TEAM !!
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-8 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3 font-roboto">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-7 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                        <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-17  rounded-full object-cover"
                                                />
                                                
                                            </div>
                                            <div className="flex justify-center ">
                                            <div className="inline-block">
                                                    <span className="block text-gray-50 font-bold text-[30px] text-center lg:text-[40px]">{item.name}</span>
                                                    <span className="block text-sm mt-0.5 text-center font-bold text-[20px]">{item.title} 
                                                    </span>
                                                </div>
                                                </div>
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <a className="flex items-center gap- hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="blank" href={item.profile}>  <span>Visit LinkedIn Profile</span>
            </a>
                                           
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                       
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial