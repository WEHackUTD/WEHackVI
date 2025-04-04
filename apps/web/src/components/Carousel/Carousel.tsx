'use client'

import React from 'react';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css';
import Image from 'next/image';

export class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                orientation="horizontal"
                isIntrinsicHeight={true}
                isPlaying={false}
                interval={6000}
                infinite={true}

            >
                <div className="flex flex-row justify-items-center justify-center flex-wrap">
                    <div className="row mx-2 md:mx-4">
                        <Slider className="slider mx-4 border-solid border-4 border-[#992444] rounded-md shadow-lg">
                            <Slide index={0}>
                                <img className="slider "
                                     src={"/img/static/images/testimonial-sanjana.jpg"} alt="testimonial picture"
                                     loading="eager"></img>
                            </Slide>
                            <Slide index={1}>
                                <img
                                    className="slider "
                                    src={"/img/static/images/testimonial-elisa.jpg"} alt="testimonial picture"
                                    loading="eager"></img>

                            </Slide>
                            <Slide index={2}>
                                <img
                                    className="slider "
                                    src={"/img/static/images/testimonial-tanvi.jpg"} alt="testimonial picture" loading="eager"></img>
                            </Slide>
                        </Slider>




                        <div className="button-grp my-3 mx-4 flex flex-row  h-10 items-center justify-between">
                            <ButtonBack
                                className='slider-btn text-center text-[#A6CDC4] font-medium text-2xl lg:text-2xl'>&lt;</ButtonBack>
                            <Dot slide={0} className="dot mt-0.5"><img

                                src={"/img/static/images/gold-vinyl.png"} loading="eager" alt={"carousel dot"}></img>
                            </Dot>
                            <Dot slide={1} className="dot mt-0.5"><img

                                src={"/img/static/images/blue-vinyl.png"} loading="eager" alt={"carousel dot"}></img></Dot>
                            <Dot slide={2} className="dot mt-0.5" ><img

                                src={"/img/static/images/red-vinyl.png"} loading="eager" alt={"carousel dot"}></img></Dot>
                            <ButtonNext
                                className='slider-btn text-center text-[#A6CDC4] font-medium text-2xl lg:text-2xl'>&gt;</ButtonNext>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Slider className="text-container justify-items-center flex-row mb-8 pb-96">
                            <Slide index={0} className='text-[#CCBA97] font-medium text-xl md:text-2xl'>
                                <p className="text-justify">"WEHack was the perfect opportunity for me because
                                    I felt like I was completely in a safe space where all my ideas were accepted. It
                                    gave me the chance to develop many different skills as well as many different
                                    relationships. I was able to gain the confidence from creating and conceiving a
                                    project all the way to presenting it in a completely inclusive space and it
                                    definitely fueled my innovation!"</p>
                                <p className="mt-5">~ Sanjana Kotha (Sophomore)</p>
                            </Slide>
                            <Slide index={1} className='text-[#CCBA97] font-medium text-xl md:text-2xl'>
                                <p className=" text-justify ">"WEHack gave me one of my most memorable experiences. It
                                    gave me the opportunity to work with new applications and attend the amazing
                                    workshops that gave me insight into tech applications and the tech industry. As a
                                    first-time hacker, WEHack stepped me out of my comfort zone and empowered me to
                                    spend the weekend developing my technical and soft skills. Experienced or not,
                                    WEHack gives women and non-binary students the opportunity to work on a challenge,
                                    talk to companies, and develop skills!"</p>
                                <p className="mt-5">~ Elisa Paul (Sophomore)</p>
                            </Slide>
                            <Slide index={2} className='text-[#CCBA97] font-medium text-xl md:text-2xl'>
                                <p className=" text-justify ">"I had a wonderful time at WEHack. I gained a lot of
                                    knowledge from both independent research online and through my collaboration with my
                                    teammates. Engaging with professionals from various companies proved to be
                                    incredibly valuable. Along the way of developing our project for different
                                    challenges, I formed new friendships and left with a strong sense of confidence in
                                    my ability to apply the skills I’ve acquired through my coursework."</p>
                                <p className="mt-5">~ Tanvi Deshpande (Junior)</p>
                            </Slide>

                        </Slider>
                        <div className="flex flex-row justify-center md:justify-self-start">
                            <Image className="sticker h-auto lg:max-w-72 mx-1 mt-18 lg:mt-0 lg:-mr-96"
                                 src={"/img/static/images/Group 27.svg"} alt={"WEHack Sticker"} width={250} height={250}/>
                        </div>
                    </div>
                </div>
            </CarouselProvider>
        );
    }
}

