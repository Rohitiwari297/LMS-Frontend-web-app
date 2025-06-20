import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from '../Assets/Images/aboutMainImage.png'
import CarouselSlide from "../Components/CarouselSlide";

import { celebrities } from "../Constants/CelebrityData";




function AboutUs(){
    //array of celebrities
    console.log(celebrities)
    return (
        <HomeLayout>
            <div className="pl-20 flex flex-col text-white ">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 sapce-y-10 flex flex-col gap-5">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the world.
                            We are the providing the platform for the aspiring teachers and studants to share
                            their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img 
                            id='test1'
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>
                
                {/* Image Carousel with next/prev buttons */}

                <div className="carousel w-1/2 my-16 m-auto">
                        {celebrities && celebrities.map((celebrity=> (<CarouselSlide
                                                                        {...celebrity} 
                                                                        key={celebrity.slideNumber} 
                                                                        totalSlide={celebrities.length}
                                                                    />)))}
                   
                </div>
            </div>

        </HomeLayout>
    )
}

//
export default AboutUs;